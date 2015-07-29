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
var all_1 = require('../../../states/combat/all');
var CombatRunComponent = (function (_super) {
    __extends(CombatRunComponent, _super);
    function CombatRunComponent() {
        _super.apply(this, arguments);
        this.name = "run";
    }
    CombatRunComponent.prototype.canTarget = function () {
        return false;
    };
    CombatRunComponent.prototype.act = function (then) {
        var _this = this;
        if (!this.isCurrentTurn()) {
            return false;
        }
        var success = this._rollEscape();
        var data = {
            success: success,
            player: this.combat.machine.current
        };
        this.combat.machine.notify("combat:run", data, function () {
            if (success) {
                _this.combat.machine.setCurrentState(all_1.CombatEscapeState.NAME);
            }
            else {
                _this.combat.machine.setCurrentState(all_1.CombatEndTurnState.NAME);
            }
            then && then(_this);
        });
        return true;
    };
    CombatRunComponent.prototype._rollEscape = function () {
        var roll = _.random(0, 200);
        var chance = 100;
        if (roll === 200) {
            return false;
        }
        if (roll === 0) {
            return true;
        }
        return roll <= chance;
    };
    return CombatRunComponent;
})(combatActionComponent_1.CombatActionComponent);
exports.CombatRunComponent = CombatRunComponent;
//# sourceMappingURL=combatRunComponent.js.map