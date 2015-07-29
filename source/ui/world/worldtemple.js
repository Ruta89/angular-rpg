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
require('../../game');
var all_1 = require('../services/all');
var all_2 = require('../rpg/all');
var WorldTemple = (function () {
    function WorldTemple(game, notify) {
        var _this = this;
        this.game = game;
        this.notify = notify;
        this.active = false;
        this.name = WorldTemple.NAME;
        this.icon = null;
        this.cost = 200;
        this.model = game.world.model;
        this.party = this.model.party;
        game.world.scene.on('temple:entered', function (feature) {
            _this.name = feature.name;
            _this.icon = feature.icon;
            _this.cost = parseInt(feature.cost);
            _this.active = true;
        }, this);
        game.world.scene.on('temple:exited', function () {
            _this.close();
        }, this);
    }
    WorldTemple.prototype.onDestroy = function () {
        this.game.world.scene.off('temple:entered', null, this);
        this.game.world.scene.off('temple:exited', null, this);
        this.active = false;
    };
    WorldTemple.prototype.rest = function () {
        if (!this.active) {
            return;
        }
        var model = this.game.world.model;
        var money = model.gold;
        var cost = this.cost;
        var alreadyHealed = !_.find(model.party, function (hero) {
            return hero.get('hp') !== hero.get('maxHP');
        });
        if (cost > money) {
            this.notify.show("You don't have enough money");
        }
        else if (alreadyHealed) {
            this.notify.show("Keep your monies.\nYour party is already fully healed.");
        }
        else {
            model.gold -= cost;
            _.each(model.party, function (hero) {
                hero.set({ hp: hero.get('maxHP') });
            });
            this.notify.show("Your party has been healed! \nYou now have (" + model.gold + ") monies.", null, 2500);
        }
        this.close();
    };
    WorldTemple.prototype.close = function () {
        this.cost = 200;
        this.name = WorldTemple.NAME;
        this.active = false;
    };
    WorldTemple.NAME = 'Mystery Temple';
    WorldTemple = __decorate([
        angular2_1.Component({
            selector: 'world-temple',
            properties: ['model', 'party', 'active', 'cost', 'icon', 'name'],
            lifecycle: [angular2_1.onDestroy]
        }),
        angular2_1.View({
            templateUrl: 'source/ui/world/worldtemple.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf, all_2.RPGSprite, all_2.RPGHealthBar]
        }), 
        __metadata('design:paramtypes', [all_1.RPGGame, all_1.Notify])
    ], WorldTemple);
    return WorldTemple;
})();
exports.WorldTemple = WorldTemple;
//# sourceMappingURL=worldtemple.js.map