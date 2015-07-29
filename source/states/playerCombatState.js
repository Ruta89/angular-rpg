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
var gameStateModel_1 = require('../models/gameStateModel');
var combatStateMachine_1 = require('./combat/combatStateMachine');
var gameWorld_1 = require('../gameWorld');
var creatureModel_1 = require('../models/creatureModel');
var PlayerCombatState = (function (_super) {
    __extends(PlayerCombatState, _super);
    function PlayerCombatState() {
        var _this = this;
        _super.call(this);
        this.name = PlayerCombatState.NAME;
        this.machine = null;
        this.parent = null;
        this.finished = false;
        this.scene = null;
        this.factory = gameWorld_1.GameWorld.get().entities;
        gameStateModel_1.GameStateModel.getDataSource(function (spreadsheet) {
            _this.spreadsheet = spreadsheet;
        });
    }
    PlayerCombatState.prototype.enter = function (machine) {
        var _this = this;
        _super.prototype.enter.call(this, machine);
        this.parent = machine;
        this.machine = new combatStateMachine_1.CombatStateMachine(machine);
        this.scene = new pow2.scene.Scene();
        machine.world.mark(this.scene);
        if (!this.factory || !this.spreadsheet) {
            throw new Error("Invalid combat entity container or game data spreadsheet");
        }
        _.each(machine.model.party, function (hero, index) {
            var heroEntity = _this.factory.createObject('CombatPlayer', {
                model: hero,
                combat: _this
            });
            if (!heroEntity) {
                throw new Error("Entity failed to validate with given inputs");
            }
            if (!heroEntity.isDefeated()) {
                heroEntity.icon = hero.get('icon');
                _this.machine.party.push(heroEntity);
                _this.scene.addObject(heroEntity);
            }
        });
        var mapUrl = machine.world.getMapUrl('combat');
        machine.world.loader.load(mapUrl, function (map) {
            _this.tileMap = _this.factory.createObject('GameCombatMap', {
                resource: map
            });
            var zone = machine.encounterInfo;
            var visibleZone = zone.target || zone.map;
            _.each(_this.tileMap.getLayers(), function (l) {
                l.visible = (l.name === visibleZone);
            });
            _this.tileMap.dirtyLayers = true;
            _this.scene.addObject(_this.tileMap);
            var enemyList = _this.spreadsheet.getSheetData("enemies");
            var enemiesLength = machine.encounter.enemies.length;
            for (var i = 0; i < enemiesLength; i++) {
                var tpl = _.where(enemyList, { id: machine.encounter.enemies[i] });
                if (tpl.length === 0) {
                    continue;
                }
                var nmeModel = new creatureModel_1.CreatureModel(tpl[0]);
                var nme = _this.factory.createObject('CombatEnemy', {
                    model: nmeModel,
                    combat: _this,
                    sprite: {
                        name: "enemy",
                        icon: nmeModel.get('icon')
                    }
                });
                if (!nme) {
                    throw new Error("Entity failed to validate with given inputs");
                }
                _this.scene.addObject(nme);
                _this.machine.enemies.push(nme);
            }
            if (_this.machine.enemies.length) {
                _.each(_this.machine.party, function (heroEntity, index) {
                    var battleSpawn = _this.tileMap.getFeature('p' + (index + 1));
                    heroEntity.setPoint(new pow2.Point(battleSpawn.x / 16, battleSpawn.y / 16));
                });
                _.each(_this.machine.enemies, function (enemyEntity, index) {
                    var battleSpawn = _this.tileMap.getFeature('e' + (index + 1));
                    if (battleSpawn) {
                        enemyEntity.setPoint(new pow2.Point(battleSpawn.x / 16, battleSpawn.y / 16));
                    }
                });
                machine.trigger('combat:begin', _this);
                _this.machine.update(_this);
            }
            else {
                machine.trigger('combat:end', _this);
            }
        });
    };
    PlayerCombatState.prototype.exit = function (machine) {
        machine.trigger('combat:end', this);
        if (this.scene) {
            machine.world.erase(this.scene);
            this.scene.destroy();
            this.scene = null;
        }
        if (this.tileMap) {
            this.tileMap.destroy();
            this.tileMap = null;
        }
        this.finished = false;
        this.machine = null;
        this.parent = null;
    };
    PlayerCombatState.NAME = "combat";
    return PlayerCombatState;
})(pow2.State);
exports.PlayerCombatState = PlayerCombatState;
//# sourceMappingURL=playerCombatState.js.map