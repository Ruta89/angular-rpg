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
/// <reference path="../typings/angular2/angular2.d.ts"/>
/// <reference path="../typings/es6-promise/es6-promise.d.ts"/>
/// <reference path="../bower_components/pow2/lib/pow2.d.ts" />
/// <reference path="../bower_components/pow2/types/backbone/backbone.d.ts" />
var angular2_1 = require('angular2/angular2');
var gameWorld_1 = require('./gameWorld');
var gameStateModel_1 = require('./models/gameStateModel');
var gameStateMachine_1 = require('./states/gameStateMachine');
var all_1 = require('./ui/services/all');
var all_2 = require('./ui/combat/all');
var all_3 = require('./ui/rpg/all');
var all_4 = require('./ui/party/all');
var all_5 = require('./ui/world/all');
var md = require('./ui/material/components/all');
var RPGAppComponent = (function () {
    function RPGAppComponent(game, notify) {
        var _this = this;
        this.game = game;
        this.notify = notify;
        this.maps = [
            'castle', 'crypt', 'fortress1',
            'fortress2', 'isle', 'keep',
            'lair', 'port', 'ruins', 'sewer',
            'tower1', 'tower2', 'tower3', 'town',
            'village', 'wilderness'
        ];
        this.loaded = true;
        this.combat = null;
        game.initGame().then(function (newGame) {
            game.machine.on('combat:begin', function (state) {
                _this.game.world.scene.paused = true;
                _this.combat = state;
            });
            game.machine.on('combat:end', function () {
                _this.game.world.scene.paused = false;
                _this.combat = null;
            });
            console.log("Game fully initialized.");
            if (newGame) {
                var msgs = [
                    'Urrrrrgh.', 'What is this?',
                    'Why am I facing a wall in a strange town?',
                    'Oh well, it is probably not important.',
                    'I better take a look around',
                ];
                msgs.forEach(function (m) { return _this.notify.show(m, null, 0); });
            }
        }).catch(console.error.bind(console));
    }
    RPGAppComponent.prototype.setMap = function (value) {
        this.game.partyPosition.zero();
        this.game.partyMapName = value;
    };
    RPGAppComponent = __decorate([
        angular2_1.Component({
            selector: 'rpg-game',
            hostInjector: [all_1.RPGGame, all_1.Notify, all_1.Animate],
            properties: ['loaded', 'game', 'combat']
        }),
        angular2_1.View({
            templateUrl: 'source/game.html',
            directives: [
                angular2_1.NgFor, angular2_1.NgIf,
                all_5.WorldMap, all_5.WorldDialog, all_5.WorldStore, all_5.WorldTemple,
                all_2.CombatMap, all_2.CombatDamage,
                all_4.PlayerCard,
                all_4.PartyInventory, all_4.PartyMenu,
                md.MdProgressLinear, md.MdButton,
                all_3.RPGSprite, all_3.RPGNotification, all_3.RPGHealthBar]
        }), 
        __metadata('design:paramtypes', [all_1.RPGGame, all_1.Notify])
    ], RPGAppComponent);
    return RPGAppComponent;
})();
exports.RPGAppComponent = RPGAppComponent;
function load() {
    return new Promise(function (resolve, reject) {
        var world = new gameWorld_1.GameWorld({
            model: new gameStateModel_1.GameStateModel(),
            state: new gameStateMachine_1.GameStateMachine()
        });
        world.events.once('ready', function () {
            try {
                angular2_1.bootstrap(RPGAppComponent);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
        world.events.once('error', reject);
        pow2.registerWorld('rpg', world);
    });
}
exports.load = load;
//# sourceMappingURL=game.js.map