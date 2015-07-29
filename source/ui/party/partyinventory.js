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
var weaponModel_1 = require('../../models/weaponModel');
var armorModel_1 = require('../../models/armorModel');
var usableModel_1 = require('../../models/usableModel');
var rpggame_1 = require('../services/rpggame');
var all_1 = require('../rpg/all');
var notify_1 = require('../services/notify');
var PartyInventory = (function () {
    function PartyInventory(game, notify) {
        this.game = game;
        this.notify = notify;
        this.currentIndex = 0;
        this.active = false;
        this.model = game.world.model;
        this.character = this.model.party[this.currentIndex];
    }
    PartyInventory.prototype.nextCharacter = function () {
        this.currentIndex++;
        if (this.currentIndex >= this.model.party.length) {
            this.currentIndex = 0;
        }
        this.character = this.model.party[this.currentIndex];
    };
    PartyInventory.prototype.previousCharacter = function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.model.party.length - 1;
        }
        this.character = this.model.party[this.currentIndex];
    };
    PartyInventory.prototype.equipItem = function (item) {
        var _this = this;
        var hero = this.character;
        if (!this.model.inventory || !item || !hero) {
            return;
        }
        var users = item.get('usedby');
        if (users && _.indexOf(users, hero.get('type')) === -1) {
            this.notify.show(hero.get('name') + " cannot equip this item");
            return;
        }
        if (item instanceof armorModel_1.ArmorModel) {
            var old = hero.equipArmor(item);
            if (old) {
                this.model.addInventory(old);
            }
        }
        else if (item instanceof weaponModel_1.WeaponModel) {
            if (hero.weapon) {
                this.model.addInventory(hero.weapon);
            }
            hero.weapon = item;
        }
        else if (item instanceof usableModel_1.UsableModel) {
            var i = item;
            return i.use(this.character).then(function () {
                _this.notify.show("Used " + i.get('name') + " on " + _this.character.get('name'), null, 0);
                _this.model.removeInventory(item);
            });
        }
        this.model.removeInventory(item);
    };
    PartyInventory.prototype.unequipItem = function (item) {
        var hero = this.character;
        if (!this.model.inventory || !item || !hero) {
            return;
        }
        if (item instanceof armorModel_1.ArmorModel) {
            hero.unequipArmor(item);
        }
        else if (item instanceof weaponModel_1.WeaponModel) {
            var weapon = item;
            if (weapon.isNoWeapon()) {
                return;
            }
            hero.weapon = null;
        }
        this.model.addInventory(item);
    };
    PartyInventory = __decorate([
        angular2_1.Component({
            selector: 'party-inventory',
            properties: ['model', 'character', 'currentIndex', 'game', 'active']
        }),
        angular2_1.View({
            templateUrl: 'source/ui/party/partyinventory.html',
            directives: [angular2_1.NgIf, angular2_1.NgFor, all_1.RPGSprite, all_1.RPGHealthBar]
        }), 
        __metadata('design:paramtypes', [rpggame_1.RPGGame, notify_1.Notify])
    ], PartyInventory);
    return PartyInventory;
})();
exports.PartyInventory = PartyInventory;
//# sourceMappingURL=partyinventory.js.map