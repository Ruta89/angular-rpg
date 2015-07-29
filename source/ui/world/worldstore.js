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
var all_1 = require('../rpg/all');
var all_2 = require('../services/all');
var gameStateModel_1 = require('../../models/gameStateModel');
var all_3 = require('../../models/all');
var WorldStore = (function () {
    function WorldStore(game, notify) {
        var _this = this;
        this.game = game;
        this.notify = notify;
        this.active = false;
        this.name = 'Invalid Store';
        this.inventory = [];
        this.gameModel = null;
        this.selected = null;
        this.selling = false;
        this.buyer = game.world.model;
        this.gameModel = game.world.model;
        game.world.scene.on('store:entered', function (feature) {
            _this.active = true;
            _this.initStoreFromFeature(feature);
        }, this);
        game.world.scene.on('store:exited', function () {
            _this.active = false;
        }, this);
    }
    WorldStore.prototype.onDestroy = function () {
        this.game.world.scene.off('store:entered', null, this);
        this.game.world.scene.off('store:exited', null, this);
        this.close();
    };
    WorldStore.prototype.initStoreFromFeature = function (feature) {
        var _this = this;
        gameStateModel_1.GameStateModel.getDataSource(function (data) {
            var hasCategory = typeof feature.host.category !== 'undefined';
            var theChoices = [];
            if (!hasCategory || feature.host.category === 'weapons') {
                theChoices = theChoices.concat(data.getSheetData('weapons'));
            }
            if (!hasCategory || feature.host.category === 'armor') {
                theChoices = theChoices.concat(data.getSheetData('armor'));
            }
            if (!hasCategory || feature.host.category === 'items') {
                theChoices = theChoices.concat(data.getSheetData('items'));
            }
            var items = [];
            _.each(feature.host.groups, function (group) {
                items = items.concat(_.filter(theChoices, function (c) {
                    return !c.groups || _.indexOf(c.groups, group) !== -1;
                }));
            });
            _this.name = feature.name;
            _this.inventory = _.map(_.where(items, {
                level: feature.host.feature.level
            }), function (i) { return _.extend({}, i); });
        });
    };
    WorldStore.prototype.close = function () {
        this.active = false;
        this.selling = false;
        this.selected = null;
    };
    WorldStore.prototype.actionItem = function (item) {
        if (!item) {
            return;
        }
        var model = this.game.world.model;
        var value = parseInt(item.cost);
        if (this.selling) {
            var itemIndex = -1;
            for (var i = 0; i < model.inventory.length; i++) {
                if (model.inventory[i].id === item.id) {
                    itemIndex = i;
                    break;
                }
            }
            if (itemIndex !== -1) {
                model.gold += value;
                this.notify.show("Sold " + item.name + " for " + item.cost + " gold.", null, 1500);
                model.inventory.splice(itemIndex, 1);
            }
        }
        else {
            if (value > model.gold) {
                this.notify.show("You don't have enough money");
                return;
            }
            else {
                model.gold -= value;
                this.notify.show("Purchased " + item.name + ".", null, 1500);
                var instanceModel = this.game.world.itemModelFromId(item.id);
                if (!instanceModel) {
                    throw new Error("Tried (and failed) to create item from invalid id: '" + item.id + "'.  Make sure ID is present in game data source");
                }
                model.inventory.push(instanceModel);
            }
        }
        this.selected = null;
        this.selling = false;
    };
    WorldStore.prototype.getActionVerb = function () {
        return this.selling ? "Sell" : "Buy";
    };
    WorldStore.prototype.isBuying = function () {
        return !this.selected && !this.selling;
    };
    WorldStore.prototype.isSelling = function () {
        return !this.selected && this.selling;
    };
    WorldStore.prototype.toggleAction = function () {
        if (!this.selling) {
            if (this.gameModel.inventory.length === 0) {
                this.notify.show("You don't have any unequipped inventory to sell.", null, 1500);
                this.selling = false;
                return;
            }
        }
        this.selling = !this.selling;
    };
    WorldStore.prototype.selectItem = function (item) {
        if (item instanceof all_3.ItemModel) {
            item = item.toJSON();
        }
        this.selected = item;
    };
    WorldStore = __decorate([
        angular2_1.Component({
            selector: 'world-store',
            properties: ['selected', 'inventory', 'name', 'buyer'],
            lifecycle: [angular2_1.onDestroy]
        }),
        angular2_1.View({
            templateUrl: 'source/ui/world/worldstore.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf, all_1.RPGSprite]
        }), 
        __metadata('design:paramtypes', [all_2.RPGGame, all_2.Notify])
    ], WorldStore);
    return WorldStore;
})();
exports.WorldStore = WorldStore;
//# sourceMappingURL=worldstore.js.map