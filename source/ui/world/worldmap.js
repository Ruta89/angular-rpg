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
var gameFeatureObject_1 = require('../../objects/gameFeatureObject');
var all_1 = require('../services/all');
var map_1 = require('../map');
var WorldMap = (function (_super) {
    __extends(WorldMap, _super);
    function WorldMap(elRef, game, notify) {
        var _this = this;
        _super.call(this, elRef, game);
        this.elRef = elRef;
        this.game = game;
        this.notify = notify;
        this.styleBackground = 'rgba(0,0,0,1)';
        this.tileMap = null;
        this.objectRenderer = new pow2.tile.render.TileObjectRenderer;
        this.mouse = null;
        this.targetFill = "rgba(10,255,10,0.3)";
        this.targetStroke = "rgba(10,255,10,0.3)";
        this.targetStrokeWidth = 1.5;
        this._player = null;
        this._position = new pow2.Point();
        this._players = null;
        this._playerRenders = null;
        this._sprites = null;
        this._movers = null;
        this._features = null;
        this._renderables = [];
        this.mouseClick = _.bind(this.mouseClick, this);
        this.camera.point.set(-0.5, -0.5);
        game.world.scene.addView(this);
        _.defer(function () { return _this._onResize(); });
        game.world.scene.on('portal:entered', function (data) {
            _this._loadMap(data.map).then(function () {
                game.partyMapName = data.map;
                game.partyPosition = data.target;
                game.world.model.setKeyData('playerMap', data.map);
                game.world.model.setKeyData('playerPosition', data.target);
            }).catch(console.error.bind(console));
        });
        game.world.scene.on('treasure:entered', function (feature) {
            if (typeof feature.gold !== 'undefined') {
                game.world.model.addGold(feature.gold);
                _this.notify.show("You found " + feature.gold + " gold!", null, 0);
            }
            if (typeof feature.item === 'string') {
                var item = game.world.itemModelFromId(feature.item);
                if (!item) {
                    return;
                }
                game.world.model.inventory.push(item);
                _this.notify.show("You found " + item.get('name') + "!", null, 0);
            }
        });
    }
    WorldMap.prototype._onMapLoaded = function (map) {
        map.buildFeatures();
        if (this._player) {
            this.game.createPlayer(this._player, this.tileMap);
        }
        this.clearCache();
        this._onResize();
        this.tileMap.syncComponents();
    };
    Object.defineProperty(WorldMap.prototype, "player", {
        get: function () {
            return this._player;
        },
        set: function (value) {
            this._player = value;
            if (this.tileMap) {
                this.game.createPlayer(this._player, this.tileMap);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorldMap.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position.set(value);
            if (this.game.sprite) {
                this.game.sprite.setPoint(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    WorldMap.prototype._onResize = function () {
        _super.prototype._onResize.call(this);
        if (this.tileMap) {
            var tileOffset = this.tileMap.bounds.getCenter();
            var offset = this._bounds.clone().divide(2).multiply(-1).add(tileOffset);
            this.camera.point.set(offset.floor());
        }
        this.camera.extent.set(this._bounds);
    };
    WorldMap.prototype.onAddToScene = function (scene) {
        this.clearCache();
        _super.prototype.onAddToScene.call(this, scene);
        this.mouse = scene.world.input.mouseHook(this, "world");
        this.$el.on('click touchstart', this.mouseClick);
        this.scene.on(pow2.tile.TileMap.Events.MAP_LOADED, this.syncComponents, this);
    };
    WorldMap.prototype.onRemoveFromScene = function (scene) {
        this.clearCache();
        scene.world.input.mouseUnhook("world");
        this.$el.off('click', this.mouseClick);
        this.scene.off(pow2.tile.TileMap.Events.MAP_LOADED, this.syncComponents, this);
    };
    WorldMap.prototype.mouseClick = function (e) {
        var pathComponent = this.scene.componentByType(pow2.tile.components.PathComponent);
        var playerComponent = this.scene.componentByType(pow2.scene.components.PlayerComponent);
        if (pathComponent && playerComponent) {
            pow2.Input.mouseOnView(e.originalEvent, this.mouse.view, this.mouse);
            playerComponent.path = pathComponent.calculatePath(playerComponent.targetPoint, this.mouse.world);
            e.preventDefault();
            return false;
        }
    };
    WorldMap.prototype.syncComponents = function () {
        _super.prototype.syncComponents.call(this);
        this.clearCache();
    };
    WorldMap.prototype.clearCache = function () {
        this._players = null;
        this._playerRenders = null;
        this._sprites = null;
        this._movers = null;
        this._renderables = [];
        this._features = null;
    };
    WorldMap.prototype.renderFrame = function (elapsed) {
        _super.prototype.renderFrame.call(this, elapsed);
        if (!this._features) {
            this._features = this.scene.objectsByType(gameFeatureObject_1.GameFeatureObject);
            this._renderables = this._renderables.concat(this._features);
        }
        if (!this._playerRenders) {
            this._playerRenders = this.scene.objectsByComponent(pow2.game.components.PlayerRenderComponent);
            this._renderables = this._renderables.concat(this._playerRenders);
        }
        if (!this._players) {
            this._players = this.scene.objectsByComponent(pow2.scene.components.PlayerComponent);
            this._renderables = this._renderables.concat(this._players);
        }
        if (!this._sprites) {
            this._sprites = this.scene.componentsByType(pow2.tile.components.SpriteComponent);
            this._renderables = this._renderables.concat(this._sprites);
        }
        var l = this._renderables.length;
        for (var i = 0; i < l; i++) {
            var renderObj = this._renderables[i];
            this.objectRenderer.render(renderObj, renderObj, this);
        }
        if (!this._movers) {
            this._movers = this.scene.componentsByType(pow2.scene.components.MovableComponent);
        }
        l = this._movers.length;
        for (var i = 0; i < l; i++) {
            var target = this._movers[i];
            if (target.path.length > 0) {
                this.context.save();
                var destination = target.path[target.path.length - 1].clone();
                destination.x -= 0.5;
                destination.y -= 0.5;
                var screenTile = this.worldToScreen(new pow2.Rect(destination, new pow2.Point(1, 1)));
                this.context.fillStyle = this.targetFill;
                this.context.fillRect(screenTile.point.x, screenTile.point.y, screenTile.extent.x, screenTile.extent.y);
                this.context.strokeStyle = this.targetStroke;
                this.context.lineWidth = this.targetStrokeWidth;
                this.context.strokeRect(screenTile.point.x, screenTile.point.y, screenTile.extent.x, screenTile.extent.y);
                this.context.restore();
            }
        }
        return this;
    };
    WorldMap = __decorate([
        angular2_1.Component({
            selector: 'world-map',
            properties: ['mapName', 'player', 'playerPosition'],
            host: {
                '(window:resize)': '_onResize($event)'
            }
        }),
        angular2_1.View({
            template: "\n  <canvas>\n    Your browser doesn't support this.\n  </canvas>\n  ",
            host: {
                '[style.color]': 'styleBackground'
            }
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, all_1.RPGGame, all_1.Notify])
    ], WorldMap);
    return WorldMap;
})(map_1.Map);
exports.WorldMap = WorldMap;
//# sourceMappingURL=worldmap.js.map