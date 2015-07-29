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
var combatChooseActionState_1 = require('./combatChooseActionState');
var CombatStartState = (function (_super) {
    __extends(CombatStartState, _super);
    function CombatStartState() {
        _super.apply(this, arguments);
        this.name = CombatStartState.NAME;
    }
    CombatStartState.prototype.enter = function (machine) {
        _super.prototype.enter.call(this, machine);
        _.defer(function () {
            machine.notify("combat:start", machine.parent.encounter, function () {
                machine.setCurrentState(combatChooseActionState_1.CombatChooseActionState.NAME);
            });
        });
    };
    CombatStartState.NAME = "Combat Started";
    return CombatStartState;
})(combatState_1.CombatState);
exports.CombatStartState = CombatStartState;
//# sourceMappingURL=combatStartState.js.map