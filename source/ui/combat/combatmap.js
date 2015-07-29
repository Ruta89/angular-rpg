/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var combatCameraComponent_1 = require('../../components/combat/combatCameraComponent');
var gameEntityObject_1 = require('../../objects/gameEntityObject');
var chooseactionstates_1 = require('./chooseactionstates');
var all_1 = require('../services/all');
var all_2 = require('../rpg/all');
var map_1 = require('../map');
var combatdamage_1 = require('./combatdamage');
var CombatMap = (function (_super) {
    __extends(CombatMap, _super);
    function CombatMap(elRef, game, animate, notify) {
        var _this = this;
        _super.call(this, elRef, game);
        this.elRef = elRef;
        this.game = game;
        this.animate = animate;
        this.notify = notify;
        this.pointer = null;
        this.items = [];
        this.combat = null;
        this.damages = [];
        this.objectRenderer = new pow2.tile.render.TileObjectRenderer;
        this.mouse = null;
        this._map = null;
        _.defer(function () { return _this.initialize(); });
    }
    Object.defineProperty(CombatMap.prototype, "map", {
        get: function () {
            return this._map;
        },
        set: function (value) {
            this._map = value;
            if (this._map) {
                this.setTileMap(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    CombatMap.prototype.initialize = function () {
        var _this = this;
        _.defer(function () { return _this._onResize(); });
        this.camera.point.zero();
        this.camera.extent.set(25, 25);
        this.mouseClick = _.bind(this.mouseClick, this);
        this._bindRenderCombat();
        this.combat.scene.addView(this);
        this.game.world.time.addObject(this);
        this.combat.machine.on('combat:chooseMoves', this.chooseTurns, this);
        this.pointer = {
            element: this.elRef.nativeElement.querySelector('.point-to-player'),
            object: null,
            offset: new pow2.Point()
        };
    };
    CombatMap.prototype.onDestroy = function () {
        if (this.combat && this.combat.scene) {
            this.combat.scene.removeView(this);
            if (this.combat.machine) {
                this.combat.machine.off('combat:chooseMoves', this.chooseTurns, this);
            }
        }
        this.game.world.time.removeObject(this);
        this.pointer = null;
        this.damages = [];
    };
    CombatMap.prototype.onAddToScene = function (scene) {
        _super.prototype.onAddToScene.call(this, scene);
        if (scene.world && scene.world.input) {
            this.mouse = scene.world.input.mouseHook(this, "combat");
        }
        this.$el.on('click touchstart', this.mouseClick);
    };
    CombatMap.prototype.onRemoveFromScene = function (scene) {
        if (scene.world && scene.world.input) {
            scene.world.input.mouseUnhook("combat");
        }
        this.$el.off('click touchstart', this.mouseClick);
    };
    CombatMap.prototype.tick = function (elapsed) {
        if (!this || !this.pointer || !this.pointer.object) {
            return;
        }
        var targetPos = this.pointer.object.point.clone();
        targetPos.y = (targetPos.y - this.camera.point.y) + this.pointer.offset.y;
        targetPos.x = (targetPos.x - this.camera.point.x) + this.pointer.offset.x;
        var screenPos = this.worldToScreen(targetPos, this.cameraScale);
        var el = $(this.pointer.element);
        el.css({
            left: screenPos.x,
            top: screenPos.y
        });
    };
    CombatMap.prototype.processCamera = function () {
        this.cameraComponent = this.scene.componentByType(combatCameraComponent_1.CombatCameraComponent);
        _super.prototype.processCamera.call(this);
    };
    CombatMap.prototype.renderFrame = function (elapsed) {
        var _this = this;
        _super.prototype.renderFrame.call(this, elapsed);
        var players = this.scene.objectsByComponent(pow2.game.components.PlayerCombatRenderComponent);
        _.each(players, function (player) {
            _this.objectRenderer.render(player, player, _this);
        });
        var sprites = this.scene.componentsByType(pow2.tile.components.SpriteComponent);
        _.each(sprites, function (sprite) {
            _this.objectRenderer.render(sprite.host, sprite, _this);
        });
        return this;
    };
    CombatMap.prototype.chooseTurns = function (data) {
        if (!this.combat.scene) {
            throw new Error("Invalid Combat Scene");
        }
        var chooseSubmit = function (action) {
            inputState.data.choose(action);
            next();
        };
        var inputState = new chooseactionstates_1.ChooseActionStateMachine(this, data, chooseSubmit);
        inputState.data = data;
        var choices = data.players.slice();
        var next = function () {
            var p = choices.shift();
            if (!p) {
                return;
            }
            inputState.current = p;
            inputState.setCurrentState(chooseactionstates_1.ChooseActionType.NAME);
        };
        next();
    };
    CombatMap.prototype.setPointerTarget = function (object, directionClass, offset) {
        if (directionClass === void 0) { directionClass = "right"; }
        if (offset === void 0) { offset = new pow2.Point(); }
        var el = $(this.pointer.element);
        el.removeClass('left right');
        el.addClass(directionClass);
        if (this.pointer) {
            this.pointer.object = object;
            this.pointer.offset = offset;
        }
    };
    CombatMap.prototype.addPointerClass = function (clazz) {
        $(this.pointer.element).addClass(clazz);
    };
    CombatMap.prototype.removePointerClass = function (clazz) {
        $(this.pointer.element).removeClass(clazz);
    };
    CombatMap.prototype.getMemberClass = function (member, focused) {
        return {
            focused: focused && focused.model && member.model.get('name') === focused.model.get('name')
        };
    };
    CombatMap.prototype.applyDamage = function (to, value) {
        var targetPos = to.point.clone();
        targetPos.y -= (this.camera.point.y + 1.25);
        targetPos.x -= this.camera.point.x;
        var screenPos = this.worldToScreen(targetPos, this.cameraScale);
        screenPos.add(this.elRef.nativeElement.offsetLeft, this.elRef.nativeElement.offsetTop);
        this.damages.push({
            timeout: new Date().getTime() + 5 * 1000,
            value: Math.abs(value),
            classes: {
                miss: value === 0,
                heal: value < 0
            },
            position: screenPos
        });
    };
    CombatMap.prototype.mouseClick = function (e) {
        var hits = [];
        pow2.Input.mouseOnView(e.originalEvent, this, this.mouse);
        if (this.combat.scene.db.queryPoint(this.mouse.world, gameEntityObject_1.GameEntityObject, hits)) {
            this.combat.scene.trigger('click', this.mouse, hits);
            e.stopImmediatePropagation();
            return false;
        }
    };
    CombatMap.prototype._bindRenderCombat = function () {
        var _this = this;
        this.combat.machine.on('combat:start', function (encounter) {
            if (encounter && encounter.message) {
                var _done = _this.combat.machine.notifyWait();
                var msgs = [encounter.message];
                if (encounter.message.indexOf('|') !== -1) {
                    msgs = encounter.message.split('|');
                }
                var last = msgs.pop();
                msgs.forEach(function (m) { return _this.notify.show(m, null, 0); });
                _this.notify.show(last, _done, 0);
            }
        });
        this.combat.machine.on('combat:attack', function (data) {
            var _done = _this.combat.machine.notifyWait();
            var msg = '';
            var a = data.attacker.model.get('name');
            var b = data.defender.model.get('name');
            if (data.damage > 0) {
                msg = a + " attacked " + b + " for " + data.damage + " damage!";
            }
            else if (data.damage < 0) {
                msg = a + " healed " + b + " for " + Math.abs(data.damage) + " hit points";
            }
            else {
                msg = a + " attacked " + b + ", and MISSED!";
            }
            _this.applyDamage(data.defender, data.damage);
            _this.notify.show(msg, _done);
        });
        this.combat.machine.on('combat:run', function (data) {
            var _done = _this.combat.machine.notifyWait();
            var msg = data.player.model.get('name');
            if (data.success) {
                msg += ' bravely ran away!';
            }
            else {
                msg += ' failed to escape!';
            }
            _this.notify.show(msg, _done);
        });
        this.combat.machine.on('combat:victory', function (data) {
            var _done = _this.combat.machine.notifyWait();
            _this.notify.show("Found " + data.gold + " gold!", null, 0);
            if (data.items) {
                _.each(data.items, function (item) {
                    _this.notify.show("Found " + item.get('name'), null, 0);
                });
            }
            _this.notify.show("Gained " + data.exp + " experience!", null, 0);
            _.each(data.levels, function (hero) {
                _this.notify.show(hero.get('name') + " reached level " + hero.get('level') + "!", null, 0);
            });
            _this.notify.show("Enemies Defeated!", _done);
        });
        this.combat.machine.on('combat:defeat', function (data) {
            var done = _this.combat.machine.notifyWait();
            _this.notify.show("Your party was defeated...", function () {
                _this.game.initGame().then(done);
            }, 0);
        });
    };
    CombatMap = __decorate([
        angular2_1.Component({
            selector: 'combat-map',
            properties: ['combat', 'map', 'damages'],
            host: {
                '(window:resize)': '_onResize($event)'
            }
        }),
        angular2_1.View({
            templateUrl: 'source/ui/combat/combatmap.html',
            directives: [angular2_1.NgIf, angular2_1.NgFor, angular2_1.CSSClass, combatdamage_1.CombatDamage, all_2.RPGHealthBar],
            lifecycle: [angular2_1.onDestroy]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, all_1.RPGGame, all_1.Animate, all_1.Notify])
    ], CombatMap);
    return CombatMap;
})(map_1.Map);
exports.CombatMap = CombatMap;
//# sourceMappingURL=combatmap.js.map