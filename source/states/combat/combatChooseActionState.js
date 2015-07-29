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
var CombatChooseActionState = (function (_super) {
    __extends(CombatChooseActionState, _super);
    function CombatChooseActionState() {
        _super.apply(this, arguments);
        this.name = CombatChooseActionState.NAME;
        this.pending = [];
    }
    CombatChooseActionState.prototype.enter = function (machine) {
        var _this = this;
        _super.prototype.enter.call(this, machine);
        machine.turnList = _.shuffle(_.union(machine.getLiveParty(), machine.getLiveEnemies()));
        machine.current = machine.turnList.shift();
        machine.currentDone = true;
        this.pending = machine.getLiveParty();
        machine.playerChoices = {};
        machine.trigger("combat:chooseMoves", {
            choose: function (action) {
                machine.playerChoices[action.from._uid] = action;
                _this.pending = _.filter(_this.pending, function (p) {
                    return action.from._uid !== p._uid;
                });
                console.log(action.from.model.get('name') + " chose " + action.getActionName());
                if (_this.pending.length === 0) {
                    machine.setCurrentState(combatBeginTurnState_1.CombatBeginTurnState.NAME);
                }
            },
            players: this.pending,
            enemies: machine.getLiveEnemies()
        });
    };
    CombatChooseActionState.NAME = "Combat Choose Actions";
    return CombatChooseActionState;
})(combatState_1.CombatState);
exports.CombatChooseActionState = CombatChooseActionState;
//# sourceMappingURL=combatChooseActionState.js.map