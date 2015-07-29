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
var rpgsprite_1 = require('../rpg/rpgsprite');
var all_1 = require('../services/all');
var playercard_1 = require('./playercard');
var partyinventory_1 = require('./partyinventory');
var PartyMenu = (function () {
    function PartyMenu(game, notify) {
        this.game = game;
        this.notify = notify;
        this.page = 'party';
        this.open = false;
    }
    PartyMenu.prototype.toggle = function () {
        this.open = !this.open;
    };
    PartyMenu.prototype.getActiveClass = function (type) {
        return {
            active: type === this.page
        };
    };
    PartyMenu.prototype.showParty = function () {
        this.page = 'party';
    };
    PartyMenu.prototype.showSave = function () {
        this.page = 'save';
    };
    PartyMenu.prototype.showInventory = function () {
        this.page = 'inventory';
    };
    PartyMenu.prototype.menuResetGame = function () {
        this.game.resetGame();
        this.notify.show('Game data deleted.  Next time you refresh you will begin a new game.');
    };
    PartyMenu.prototype.menuSaveGame = function () {
        this.game.saveGame();
        this.notify.show('Game state saved!  Nice.');
    };
    PartyMenu = __decorate([
        angular2_1.Component({
            selector: 'party-menu',
            properties: ['game', 'page', 'open']
        }),
        angular2_1.View({
            templateUrl: 'source/ui/party/partymenu.html',
            directives: [angular2_1.NgIf, angular2_1.NgFor, angular2_1.CSSClass, rpgsprite_1.RPGSprite, playercard_1.PlayerCard, partyinventory_1.PartyInventory]
        }), 
        __metadata('design:paramtypes', [all_1.RPGGame, all_1.Notify])
    ], PartyMenu);
    return PartyMenu;
})();
exports.PartyMenu = PartyMenu;
//# sourceMappingURL=partymenu.js.map