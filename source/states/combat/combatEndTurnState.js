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
var combatBeginTurnState_1 = require('./combatBeginTurnState');
var combatDefeatState_1 = require('./combatDefeatState');
var combatVictoryState_1 = require('./combatVictoryState');
var combatChooseActionState_1 = require('./combatChooseActionState');
var CombatEndTurnState = (function (_super) {
    __extends(CombatEndTurnState, _super);
    function CombatEndTurnState() {
        _super.apply(this, arguments);
        this.name = CombatEndTurnState.NAME;
    }
    CombatEndTurnState.prototype.enter = function (machine) {
        _super.prototype.enter.call(this, machine);
        machine.current = null;
        while (machine.turnList.length > 0 && !machine.current) {
            machine.current = machine.turnList.shift();
            if (machine.current && machine.current.isDefeated()) {
                machine.current = null;
            }
        }
        var targetState = machine.current ? combatBeginTurnState_1.CombatBeginTurnState.NAME : combatChooseActionState_1.CombatChooseActionState.NAME;
        if (machine.partyDefeated()) {
            targetState = combatDefeatState_1.CombatDefeatState.NAME;
        }
        else if (machine.enemiesDefeated()) {
            targetState = combatVictoryState_1.CombatVictoryState.NAME;
        }
        if (!targetState) {
            throw new Error("Invalid transition from end turn");
        }
        machine.setCurrentState(targetState);
    };
    CombatEndTurnState.NAME = "Combat End Turn";
    return CombatEndTurnState;
})(combatState_1.CombatState);
exports.CombatEndTurnState = CombatEndTurnState;
//# sourceMappingURL=combatEndTurnState.js.map