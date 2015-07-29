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
var all_1 = require('./all');
var _gameData = null;
var GameStateModel = (function (_super) {
    __extends(GameStateModel, _super);
    function GameStateModel(options) {
        _super.call(this);
        this.keyData = {};
        _.defaults(this, options || {}, {
            gold: 200,
            playerPosition: new pow2.Point(),
            playerMap: "",
            combatZone: "world-plains",
            party: [],
            inventory: []
        });
    }
    GameStateModel.prototype.initData = function (then) {
        GameStateModel.getDataSource(then);
    };
    GameStateModel.getDataSource = function (then) {
        if (_gameData) {
            then && then(_gameData);
            return _gameData;
        }
        else {
            return pow2.ResourceLoader.get().loadAsType(pow2.SPREADSHEET_ID, pow2.GameDataResource, function (resource) {
                _gameData = resource;
                then && then(resource);
            });
        }
    };
    GameStateModel.prototype.setKeyData = function (key, data) {
        this.keyData[key] = data;
    };
    GameStateModel.prototype.getKeyData = function (key) {
        return this.keyData[key];
    };
    GameStateModel.prototype.addInventory = function (item) {
        this.inventory.push(item);
        return item;
    };
    GameStateModel.prototype.removeInventory = function (item) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].cid === item.cid) {
                this.inventory.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    GameStateModel.prototype.addHero = function (model) {
        this.party.push(model);
        model.game = this;
    };
    GameStateModel.prototype.addGold = function (amount) {
        this.gold += amount;
    };
    GameStateModel.prototype.parse = function (data, options) {
        var _this = this;
        if (!_gameData) {
            throw new Error("cannot instantiate inventory without valid data source.\nCall model.initData(loader) first.");
        }
        try {
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }
        }
        catch (e) {
            console.log("Failed to load save game.");
            return;
        }
        if (typeof data.keyData !== 'undefined') {
            this.keyData = data.keyData;
        }
        this.inventory = _.map(data.inventory, function (item) {
            return _this.world.itemModelFromId(item.id);
        });
        this.party = _.map(data.party, function (partyMember) {
            var model = new all_1.HeroModel();
            model.fromString(partyMember, _this.world);
            return model;
        });
        _.extend(this, _.omit(data, 'party', 'inventory', 'keyData'));
    };
    GameStateModel.prototype.toJSON = function () {
        var result = {
            gold: this.gold
        };
        result.party = _.map(this.party, function (p) {
            return p.toJSON ? p.toJSON() : p;
        });
        result.inventory = _.map(this.inventory, function (p) {
            return p.attributes ? _.pick(p.attributes, 'id') : p.id;
        });
        try {
            result.keyData = this.keyData;
        }
        catch (e) {
            console.error("Failed to stringify keyData");
            result.keyData = {};
        }
        return result;
    };
    return GameStateModel;
})(pow2.Events);
exports.GameStateModel = GameStateModel;
//# sourceMappingURL=gameStateModel.js.map