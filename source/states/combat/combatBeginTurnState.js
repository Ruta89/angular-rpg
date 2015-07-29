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
var combatAttackComponent_1 = require('../../components/combat/actions/combatAttackComponent');
var CombatBeginTurnState = (function (_super) {
    __extends(CombatBeginTurnState, _super);
    function CombatBeginTurnState() {
        _super.apply(this, arguments);
        this.name = CombatBeginTurnState.NAME;
    }
    CombatBeginTurnState.prototype.enter = function (machine) {
        _super.prototype.enter.call(this, machine);
        this.machine = machine;
        machine.currentDone = false;
        machine.current.scale = 1.25;
        this.current = machine.current;
        if (machine.current && machine.isFriendlyTurn()) {
            machine.focus = machine.current;
        }
        machine.trigger("combat:beginTurn", machine.current);
        var choice = null;
        if (machine.isFriendlyTurn()) {
            console.log("TURN: " + machine.current.model.get('name'));
            choice = machine.playerChoices[machine.current._uid];
        }
        else {
            choice = machine.current.findComponent(combatAttackComponent_1.CombatAttackComponent);
            if (choice) {
                choice.to = machine.getRandomPartyMember();
                choice.from = machine.current;
            }
        }
        if (!choice) {
            throw new Error("Invalid Combat Action Choice. This should not happen.");
        }
        if (choice.to && choice.to.isDefeated()) {
            choice.to = machine.getRandomEnemy();
        }
        _.defer(function () {
            choice.act(function (act, error) {
                if (error) {
                    console.error(error);
                }
            });
        });
    };
    CombatBeginTurnState.prototype.exit = function (machine) {
        this.current.scale = 1;
        _super.prototype.exit.call(this, machine);
    };
    CombatBeginTurnState.NAME = "Combat Begin Turn";
    return CombatBeginTurnState;
})(combatState_1.CombatState);
exports.CombatBeginTurnState = CombatBeginTurnState;
//# sourceMappingURL=combatBeginTurnState.js.map