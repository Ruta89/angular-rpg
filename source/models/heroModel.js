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
var levelExpChart = [
    0,
    32,
    96,
    208,
    400,
    672,
    1056,
    1552,
    2184,
    2976
];
exports.HeroTypes = {
    Warrior: "warrior",
    LifeMage: "mage",
    Necromancer: "necromancer",
    Ranger: "ranger"
};
var HeroModel = (function (_super) {
    __extends(HeroModel, _super);
    function HeroModel() {
        _super.apply(this, arguments);
        this.defenseBuff = 0;
    }
    HeroModel.prototype.defaults = function () {
        return _.extend(_super.prototype.defaults.call(this), HeroModel.DEFAULTS);
    };
    HeroModel.prototype.equipArmor = function (item) {
        var slot = item.get('type');
        var obj = this;
        var oldArmor;
        if (_.indexOf(HeroModel.ARMOR_TYPES, slot) !== -1) {
            oldArmor = obj[slot];
            obj[slot] = item;
        }
        return oldArmor;
    };
    HeroModel.prototype.unequipArmor = function (item) {
        var slot = item.get('type');
        var obj = this;
        var oldArmor = obj[slot];
        if (!oldArmor || !slot) {
            return false;
        }
        obj[slot] = null;
        return true;
    };
    HeroModel.prototype.getEvasion = function () {
        var obj = this;
        var evasionPenalty = _.reduce(HeroModel.ARMOR_TYPES, function (val, type) {
            var item = obj[type];
            if (!item) {
                return val;
            }
            return val + item.attributes.evade;
        }, 0);
        return entityModel_1.EntityModel.BASE_EVASION + this.attributes.agility + evasionPenalty;
    };
    HeroModel.prototype.attack = function (defender) {
        var amount = this.getAttackStrength();
        var damage = this.calculateDamage(amount);
        if (this.rollHit(defender)) {
            return defender.damage(damage);
        }
        return 0;
    };
    HeroModel.prototype.getXPForLevel = function (level) {
        if (level === void 0) { level = this.attributes.level; }
        if (level == 0) {
            return 0;
        }
        return levelExpChart[level - 1];
    };
    HeroModel.prototype.getDefense = function (base) {
        if (base === void 0) { base = false; }
        var obj = this;
        var baseDefense = _.reduce(HeroModel.ARMOR_TYPES, function (val, type) {
            var item = obj[type];
            if (!item) {
                return val;
            }
            return val + item.attributes.defense;
        }, 0);
        return baseDefense + (base ? 0 : this.defenseBuff);
    };
    HeroModel.prototype.getAttackStrength = function () {
        return this.getWeaponStrength() + this.attributes.strength / 2;
    };
    HeroModel.prototype.getMagicStrength = function () {
        return this.getWeaponStrength() + this.attributes.intelligence / 2;
    };
    HeroModel.prototype.getWeaponStrength = function () {
        return this.weapon ? this.weapon.attributes.attack : 0;
    };
    HeroModel.prototype.calculateDamage = function (amount) {
        var max = amount * 1.2;
        var min = amount * 0.8;
        return Math.max(1, Math.floor(Math.random() * (max - min + 1)) + min);
    };
    HeroModel.prototype.awardExperience = function (exp) {
        var newExp = this.attributes.exp + exp;
        this.set({
            exp: newExp
        });
        if (newExp >= this.attributes.nextLevelExp) {
            this.awardLevelUp();
            return true;
        }
        return false;
    };
    HeroModel.prototype.awardLevelUp = function () {
        var nextLevel = this.attributes.level + 1;
        var newHP = this.getHPForLevel(nextLevel);
        this.set({
            level: nextLevel,
            maxHP: newHP,
            strength: this.getStrengthForLevel(nextLevel),
            agility: this.getAgilityForLevel(nextLevel),
            vitality: this.getVitalityForLevel(nextLevel),
            intelligence: this.getIntelligenceForLevel(nextLevel),
            nextLevelExp: this.getXPForLevel(nextLevel + 1),
            prevLevelExp: this.getXPForLevel(nextLevel)
        });
        this.trigger('levelUp', this);
    };
    HeroModel.prototype.fromString = function (data, world) {
        try {
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }
        }
        catch (e) {
            console.log("Failed to load save game.");
            return false;
        }
        if (!data) {
            return false;
        }
        var obj = this;
        _.each(HeroModel.ARMOR_TYPES, function (type) {
            if (data[type]) {
                obj[type] = world.itemModelFromId(data[type]);
            }
        });
        if (data.weapon) {
            this.weapon = world.itemModelFromId(data.weapon);
        }
        this.set(_.omit(data, _.flatten(['weapon', HeroModel.ARMOR_TYPES])));
        return true;
    };
    HeroModel.prototype.toJSON = function () {
        var obj = this;
        var result = _super.prototype.toJSON.call(this);
        if (this.weapon) {
            result.weapon = this.weapon.get('id');
        }
        _.each(HeroModel.ARMOR_TYPES, function (type) {
            if (obj[type]) {
                result[type] = obj[type].get('id');
            }
        });
        return result;
    };
    HeroModel.prototype.getHPForLevel = function (level) {
        if (level === void 0) { level = this.attributes.level; }
        return Math.floor(this.attributes.vitality * Math.pow(level, 1.1)) + (this.attributes.baseVitality * 2);
    };
    HeroModel.prototype.getStrengthForLevel = function (level) {
        if (level === void 0) { level = this.attributes.level; }
        return Math.floor(this.attributes.baseStrength * Math.pow(level, 0.65));
    };
    HeroModel.prototype.getAgilityForLevel = function (level) {
        if (level === void 0) { level = this.attributes.level; }
        return Math.floor(this.attributes.baseAgility * Math.pow(level, 0.95));
    };
    HeroModel.prototype.getVitalityForLevel = function (level) {
        if (level === void 0) { level = this.attributes.level; }
        return Math.floor(this.attributes.baseVitality * Math.pow(level, 0.95));
    };
    HeroModel.prototype.getIntelligenceForLevel = function (level) {
        if (level === void 0) { level = this.attributes.level; }
        return Math.floor(this.attributes.baseIntelligence * Math.pow(level, 0.95));
    };
    HeroModel.create = function (type, name) {
        var character = null;
        switch (type) {
            case exports.HeroTypes.Warrior:
                character = new HeroModel({
                    type: type,
                    level: 0,
                    name: name,
                    icon: "warrior-male.png",
                    baseStrength: 10,
                    baseAgility: 2,
                    baseIntelligence: 1,
                    baseVitality: 7,
                    hitpercent: 10,
                    hitPercentPerLevel: 3
                });
                break;
            case exports.HeroTypes.LifeMage:
                character = new HeroModel({
                    type: type,
                    name: name,
                    level: 0,
                    icon: "magician-female.png",
                    baseStrength: 1,
                    baseAgility: 6,
                    baseIntelligence: 9,
                    baseVitality: 4,
                    hitpercent: 5,
                    hitPercentPerLevel: 1
                });
                break;
            case exports.HeroTypes.Ranger:
                character = new HeroModel({
                    type: type,
                    name: name,
                    level: 0,
                    icon: "ranger-female.png",
                    baseStrength: 3,
                    baseAgility: 10,
                    baseIntelligence: 2,
                    baseVitality: 5,
                    hitpercent: 7,
                    hitPercentPerLevel: 2
                });
                break;
            case exports.HeroTypes.DeathMage:
                character = new HeroModel({
                    type: type,
                    name: name,
                    level: 0,
                    icon: "magician-male.png",
                    baseStrength: 2,
                    baseAgility: 10,
                    baseIntelligence: 4,
                    baseVitality: 4,
                    hitpercent: 5,
                    hitPercentPerLevel: 2
                });
                break;
            default:
                throw new Error("Unknown character class: " + type);
        }
        character.awardLevelUp();
        character.set({
            hp: character.get('maxHP')
        });
        return character;
    };
    HeroModel.MAX_LEVEL = 50;
    HeroModel.MAX_ATTR = 50;
    HeroModel.ARMOR_TYPES = [
        'head', 'body', 'arms', 'feet', 'accessory'
    ];
    HeroModel.DEFAULTS = {
        name: "Hero",
        icon: "",
        combatSprite: "",
        type: exports.HeroTypes.Warrior,
        level: 1,
        exp: 0,
        nextLevelExp: 0,
        prevLevelExp: 0,
        hp: 0,
        maxHP: 6,
        description: "",
        baseStrength: 0,
        baseAgility: 0,
        baseIntelligence: 0,
        baseVitality: 0,
        hitpercent: 5,
        hitPercentPerLevel: 1,
        evade: 0
    };
    return HeroModel;
})(entityModel_1.EntityModel);
exports.HeroModel = HeroModel;
//# sourceMappingURL=heroModel.js.map