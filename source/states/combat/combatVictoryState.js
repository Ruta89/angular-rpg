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
var combatState_1 = require('./combatState');
var playerMapState_1 = require('../playerMapState');
var CombatVictoryState = (function (_super) {
    __extends(CombatVictoryState, _super);
    function CombatVictoryState() {
        _super.apply(this, arguments);
        this.name = CombatVictoryState.NAME;
    }
    CombatVictoryState.prototype.enter = function (machine) {
        _super.prototype.enter.call(this, machine);
        var players = _.reject(machine.party, function (p) {
            return p.isDefeated();
        });
        if (players.length === 0) {
            throw new Error("Invalid state, cannot be in victory with no living party members");
        }
        var gold = 0;
        var exp = 0;
        var items = [];
        _.each(machine.enemies, function (nme) {
            gold += nme.model.get('gold') || 0;
            exp += nme.model.get('exp') || 0;
        });
        if (machine.parent.encounterInfo.fixed) {
            var encounter = machine.parent.encounter;
            if (encounter.gold > 0) {
                gold += encounter.gold;
            }
            if (encounter.experience > 0) {
                exp += encounter.experience;
            }
            if (encounter.items && encounter.items.length > 0) {
                items = items.concat(encounter.items);
            }
        }
        machine.parent.model.addGold(gold);
        var itemModels = [];
        items.forEach(function (i) {
            var model = machine.parent.world.itemModelFromId(i);
            if (model) {
                itemModels.push(model);
                machine.parent.model.inventory.push(model);
            }
        });
        var expPerParty = Math.round(exp / players.length);
        var leveledHeros = [];
        _.each(players, function (p) {
            var heroModel = p.model;
            var leveled = heroModel.awardExperience(expPerParty);
            if (leveled) {
                leveledHeros.push(heroModel);
            }
        });
        var summary = {
            state: this,
            party: machine.party,
            enemies: machine.enemies,
            levels: leveledHeros,
            items: itemModels,
            gold: gold,
            exp: exp
        };
        machine.notify("combat:victory", summary, function () {
            machine.parent.world.reportEncounterResult(true);
            machine.parent.setCurrentState(playerMapState_1.PlayerMapState.NAME);
        });
    };
    CombatVictoryState.NAME = "Combat Victory";
    return CombatVictoryState;
})(combatState_1.CombatState);
exports.CombatVictoryState = CombatVictoryState;
//# sourceMappingURL=combatVictoryState.js.map