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
var entityModel_1 = require('./entityModel');
var CreatureModel = (function (_super) {
    __extends(CreatureModel, _super);
    function CreatureModel() {
        _super.apply(this, arguments);
    }
    CreatureModel.prototype.defaults = function () {
        return _.extend(_super.prototype.defaults.call(this), CreatureModel.DEFAULTS);
    };
    CreatureModel.prototype.initialize = function (attributes) {
        _super.prototype.initialize.call(this, attributes);
        this.set({
            maxHP: attributes.hp,
            maxMP: attributes.mp
        });
    };
    CreatureModel.prototype.attack = function (defender) {
        var hero = defender;
        var defense = hero.getDefense();
        var min = this.attributes.attacklow;
        var max = this.attributes.attackhigh;
        var damage = Math.floor(Math.random() * (max - min + 1)) + min;
        if (this.rollHit(defender)) {
            return defender.damage(Math.max(1, damage - defense));
        }
        return 0;
    };
    CreatureModel.DEFAULTS = {
        name: "Unnamed Creature",
        icon: "noIcon.png",
        groups: [],
        level: 0,
        hp: 0,
        exp: 0,
        strength: 0,
        numAttacks: 0,
        armorClass: 0,
        description: "",
        evade: 0,
        hitpercent: 1
    };
    return CreatureModel;
})(entityModel_1.EntityModel);
exports.CreatureModel = CreatureModel;
//# sourceMappingURL=creatureModel.js.map