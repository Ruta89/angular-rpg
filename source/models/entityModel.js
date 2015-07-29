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
var EntityModel = (function (_super) {
    __extends(EntityModel, _super);
    function EntityModel() {
        _super.apply(this, arguments);
    }
    EntityModel.prototype.defaults = function () {
        return _.extend({}, EntityModel.DEFAULTS);
    };
    EntityModel.prototype.rollHit = function (defender) {
        // TODO: Fix this calculation, which is producing too many misses
        // and causing the combat to feel too random and arbitrary.
        //return true;
        var roll = _.random(0, 200);
        var evasion = defender.getEvasion();
        var chance = EntityModel.BASE_CHANCE_TO_HIT + this.attributes.hitpercent - evasion;
        if (roll === 200) {
            return false;
        }
        if (roll === 0) {
            return true;
        }
        return roll <= chance;
    };
    EntityModel.prototype.damage = function (amount) {
        amount = Math.ceil(amount);
        this.set({ hp: Math.min(this.attributes.maxHP, Math.max(0, this.attributes.hp - amount)) });
        if (this.attributes.hp <= 0) {
            this.set({ dead: true });
        }
        return amount;
    };
    EntityModel.prototype.getEvasion = function () {
        return 0;
    };
    EntityModel.prototype.isDefeated = function () {
        return this.attributes.hp <= 0;
    };
    EntityModel.prototype.attack = function (defender) {
        var halfStrength = this.attributes.strength / 2;
        return defender.damage(halfStrength);
    };
    EntityModel.BASE_CHANCE_TO_HIT = 168;
    EntityModel.BASE_EVASION = 48;
    EntityModel.DEFAULTS = {
        name: "Nothing",
        icon: "",
        level: 1,
        hp: 0,
        maxHP: 0,
        strength: 5,
        vitality: 4,
        intelligence: 1,
        agility: 1,
        dead: false,
        evade: 0,
        hitpercent: 1
    };
    return EntityModel;
})(Backbone.Model);
exports.EntityModel = EntityModel;
//# sourceMappingURL=entityModel.js.map