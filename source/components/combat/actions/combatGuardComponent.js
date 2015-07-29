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
var combatActionComponent_1 = require('./combatActionComponent');
var heroModel_1 = require('../../../models/heroModel');
var combatStateMachine_1 = require('../../../states/combat/combatStateMachine');
var combatEndTurnState_1 = require('../../../states/combat/combatEndTurnState');
var combatChooseActionState_1 = require('../../../states/combat/combatChooseActionState');
var combatVictoryState_1 = require('../../../states/combat/combatVictoryState');
var combatDefeatState_1 = require('../../../states/combat/combatDefeatState');
var combatEscapeState_1 = require('../../../states/combat/combatEscapeState');
var CombatGuardComponent = (function (_super) {
    __extends(CombatGuardComponent, _super);
    function CombatGuardComponent() {
        _super.apply(this, arguments);
        this.name = "guard";
    }
    CombatGuardComponent.prototype.canTarget = function () {
        return false;
    };
    CombatGuardComponent.prototype.act = function (then) {
        this.combat.machine.setCurrentState(combatEndTurnState_1.CombatEndTurnState.NAME);
        return _super.prototype.act.call(this, then);
    };
    CombatGuardComponent.prototype.select = function () {
        this.combat.machine.on(combatStateMachine_1.CombatStateMachine.Events.ENTER, this.enterState, this);
        console.info("Adding guard defense buff to player: " + this.from.model.get('name'));
        if (!(this.from.model instanceof heroModel_1.HeroModel)) {
            throw new Error("This action is not currently applicable to non hero characters.");
        }
        var heroModel = this.from.model;
        var multiplier = heroModel.get('level') < 10 ? 2 : 0.5;
        heroModel.defenseBuff += (heroModel.getDefense(true) * multiplier);
    };
    CombatGuardComponent.prototype.enterState = function (newState, oldState) {
        var exitStates = [
            combatChooseActionState_1.CombatChooseActionState.NAME,
            combatVictoryState_1.CombatVictoryState.NAME,
            combatDefeatState_1.CombatDefeatState.NAME,
            combatEscapeState_1.CombatEscapeState.NAME
        ];
        if (_.indexOf(exitStates, newState.name) !== -1) {
            console.info("Removing guard defense buff from player: " + this.from.model.get('name'));
            this.combat.machine.off(combatStateMachine_1.CombatStateMachine.Events.ENTER, this.enterState, this);
            var heroModel = this.from.model;
            heroModel.defenseBuff = 0;
        }
    };
    return CombatGuardComponent;
})(combatActionComponent_1.CombatActionComponent);
exports.CombatGuardComponent = CombatGuardComponent;
//# sourceMappingURL=combatGuardComponent.js.map