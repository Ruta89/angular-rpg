/*
 Copyright (C) 2013-2014 by Justin DuJardin

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
var playerCombatState_1 = require('./states/playerCombatState');
var gameStateModel_1 = require('./models/gameStateModel');
var all_1 = require('./models/all');
var _sharedGameWorld = null;
var oldGetClassType = pow2.EntityContainerResource.getClassType;
pow2.EntityContainerResource.getClassType = function (name) {
    return GameWorld._typeDatabase[name];
};
var GameWorld = (function (_super) {
    __extends(GameWorld, _super);
    function GameWorld(services) {
        var _this = this;
        _super.call(this, services);
        this.events = new pow2.Events();
        this.spreadsheet = null;
        this._encounterCallback = null;
        if (!this.scene) {
            this.setService('scene', new pow2.scene.Scene());
        }
        this.loader.registerType('powEntities', pow2.EntityContainerResource);
        gameStateModel_1.GameStateModel.getDataSource(function (gsr) {
            _this.spreadsheet = gsr;
        });
        this.entities = this.loader
            .load(pow2.GAME_ROOT + 'entities/rpg.powEntities')
            .once(pow2.Resource.READY, function () {
            _this._importEntityTypes().then(function () {
                _this.events.trigger('ready');
            }).catch(function (e) {
                console.error(e);
                _this.events.trigger('error', e);
            });
        });
    }
    GameWorld.get = function () {
        if (!_sharedGameWorld) {
            _sharedGameWorld = new GameWorld();
        }
        return _sharedGameWorld;
    };
    GameWorld.prototype._nsTypeToImport = function (item) {
        var ns = item.split('.');
        var finalType = ns[ns.length - 1];
        ns[ns.length - 1] = finalType[0].toLowerCase() + finalType.substr(1);
        return ns.join('/');
    };
    GameWorld.prototype._importToNsType = function (item) {
        var ns = item.split('/');
        var finalType = ns[ns.length - 1];
        ns[ns.length - 1] = finalType[0].toUpperCase() + finalType.substr(1);
        return ns.join('.');
    };
    GameWorld.prototype._importEntityTypes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var entities = _this._getEntityContainerTypes(_this.entities);
            entities = _.filter(entities, function (e) {
                var t = oldGetClassType(e);
                if (t) {
                    GameWorld._typeDatabase[e] = t;
                }
                return !t;
            });
            var types = _.map(entities, _this._nsTypeToImport);
            var next = function () {
                if (types.length === 0) {
                    resolve();
                    return;
                }
                var instanceType = types.shift();
                System.import(instanceType).then(function (module) {
                    var nsType = _this._importToNsType(instanceType);
                    var typeName = nsType.substr(nsType.lastIndexOf('.') + 1);
                    if (!module[typeName]) {
                        reject("INVALID MODULE TYPE: " + instanceType);
                    }
                    GameWorld._typeDatabase[nsType] = module[typeName];
                    next();
                }).catch(console.error.bind(console));
            };
            next();
        });
    };
    GameWorld.prototype._getEntityContainerTypes = function (resource) {
        var types = [];
        _.each(resource.data, function (templateData) {
            types.push(templateData.type);
            if (templateData.depends) {
                _.each(templateData.depends, function (d) { return types.push(d); });
            }
            if (templateData.inputs) {
                _.each(templateData.inputs, function (type) {
                    if (type.toLowerCase() !== 'object') {
                        types.push(type);
                    }
                });
            }
            _.each(templateData.components, function (comp) {
                types.push(comp.type);
            });
        });
        return types;
    };
    GameWorld.prototype.reportEncounterResult = function (victory) {
        if (this._encounterCallback) {
            this._encounterCallback(victory);
            this._encounterCallback = null;
        }
    };
    GameWorld.prototype.getMapUrl = function (name) {
        return 'maps/' + name + '.tmx';
    };
    GameWorld.prototype.randomEncounter = function (zone, then) {
        var _this = this;
        gameStateModel_1.GameStateModel.getDataSource(function (gsr) {
            var encountersData = gsr.getSheetData("randomencounters");
            var encounters = _.filter(encountersData, function (enc) {
                return _.indexOf(enc.zones, zone.map) !== -1 || _.indexOf(enc.zones, zone.target) !== -1;
            });
            if (encounters.length === 0) {
                then && then(true);
                return;
            }
            var max = encounters.length - 1;
            var min = 0;
            var encounter = encounters[Math.floor(Math.random() * (max - min + 1)) + min];
            _this._encounter(zone, encounter, then);
        });
    };
    GameWorld.prototype.fixedEncounter = function (zone, encounterId, then) {
        var _this = this;
        gameStateModel_1.GameStateModel.getDataSource(function (gsr) {
            var encounter = _.where(gsr.getSheetData("fixedencounters"), {
                id: encounterId
            })[0];
            if (!encounter) {
                _this.scene.trigger('error', "No encounter found with id: " + encounterId);
                return then(true);
            }
            _this._encounter(zone, encounter, then);
        });
    };
    GameWorld.prototype.itemModelFromId = function (modelId) {
        if (!this.spreadsheet) {
            return null;
        }
        var data = this.spreadsheet;
        var sheets = ['weapons', 'armor', 'items'];
        var item = null;
        while (!item && sheets.length > 0) {
            var sheetName = sheets.shift();
            var itemData = _.find(data.getSheetData(sheetName), function (w) { return w.id === modelId; });
            if (itemData) {
                switch (sheetName) {
                    case 'weapons':
                        item = new all_1.WeaponModel(itemData);
                        break;
                    case 'armor':
                        item = new all_1.ArmorModel(itemData);
                        break;
                    case 'items':
                        item = new all_1.UsableModel(itemData);
                        break;
                }
            }
        }
        return item;
    };
    GameWorld.prototype._encounter = function (zoneInfo, encounter, then) {
        this.scene.trigger('combat:encounter', this);
        this.state.encounter = encounter;
        this.state.encounterInfo = zoneInfo;
        this.state.setCurrentState(playerCombatState_1.PlayerCombatState.NAME);
        this._encounterCallback = then;
    };
    GameWorld._typeDatabase = {};
    return GameWorld;
})(pow2.scene.SceneWorld);
exports.GameWorld = GameWorld;
//# sourceMappingURL=gameWorld.js.map