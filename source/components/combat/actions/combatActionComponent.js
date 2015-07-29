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
var all_1 = require('../../../models/all');
var CombatActionComponent = (function (_super) {
    __extends(CombatActionComponent, _super);
    function CombatActionComponent(combat) {
        _super.call(this);
        this.combat = combat;
        this.name = "default";
        this.from = null;
        this.to = null;
        this.spell = null;
        this.item = null;
    }
    CombatActionComponent.prototype.getActionName = function () {
        return this.name;
    };
    CombatActionComponent.prototype.isCurrentTurn = function () {
        return this.combat.machine.current === this.from;
    };
    CombatActionComponent.prototype.canTarget = function () {
        return true;
    };
    CombatActionComponent.prototype.canTargetMultiple = function () {
        return this.canTarget();
    };
    CombatActionComponent.prototype.canBeUsedBy = function (entity) {
        return entity.model && entity.model instanceof all_1.EntityModel;
    };
    CombatActionComponent.prototype.act = function (then) {
        then && then(this, null);
        return true;
    };
    CombatActionComponent.prototype.select = function () {
    };
    return CombatActionComponent;
})(pow2.scene.SceneComponent);
exports.CombatActionComponent = CombatActionComponent;
//# sourceMappingURL=combatActionComponent.js.map