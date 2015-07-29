var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var combatActionComponent_1 = require('./combatActionComponent');
var creatureModel_1 = require('../../../models/creatureModel');
var heroModel_1 = require('../../../models/heroModel');
var combatEndTurnState_1 = require('../../../states/combat/combatEndTurnState');
var damageComponent_1 = require('../../damageComponent');
var CombatMagicComponent = (function (_super) {
    __extends(CombatMagicComponent, _super);
    function CombatMagicComponent() {
        _super.apply(this, arguments);
        this.name = "magic";
    }
    CombatMagicComponent.prototype.canBeUsedBy = function (entity) {
        var supportedTypes = [
            heroModel_1.HeroTypes.LifeMage,
            heroModel_1.HeroTypes.Necromancer
        ];
        return _super.prototype.canBeUsedBy.call(this, entity) && _.indexOf(supportedTypes, entity.model.get('type')) !== -1;
    };
    CombatMagicComponent.prototype.act = function (then) {
        var _this = this;
        if (!this.isCurrentTurn()) {
            return false;
        }
        var done = function (error) {
            then && then(_this, error);
            _this.combat.machine.setCurrentState(combatEndTurnState_1.CombatEndTurnState.NAME);
        };
        if (!this.spell) {
            console.error("null spell to cast");
            return false;
        }
        switch (this.spell.id) {
            case "heal":
                return this.healSpell(done);
                break;
            case "push":
                return this.hurtSpell(done);
                break;
        }
        return true;
    };
    CombatMagicComponent.prototype.healSpell = function (done) {
        var _this = this;
        var caster = this.from;
        var target = this.to;
        var attackerPlayer = caster.findComponent(pow2.game.components.PlayerCombatRenderComponent);
        attackerPlayer.magic(function () {
            var level = target.model.get('level');
            var healAmount = -_this.spell.value;
            target.model.damage(healAmount);
            var hitSound = "sounds/heal";
            var components = {
                animation: new pow2.tile.components.AnimatedSpriteComponent({
                    spriteName: "heal",
                    lengthMS: 550
                }),
                sprite: new pow2.tile.components.SpriteComponent({
                    name: "heal",
                    icon: "animSpellCast.png"
                }),
                sound: new pow2.scene.components.SoundComponent({
                    url: hitSound,
                    volume: 0.3
                })
            };
            target.addComponentDictionary(components);
            components.animation.once('animation:done', function () {
                target.removeComponentDictionary(components);
                var data = {
                    damage: healAmount,
                    attacker: caster,
                    defender: target
                };
                _this.combat.machine.notify("combat:attack", data, done);
            });
        });
        return true;
    };
    CombatMagicComponent.prototype.hurtSpell = function (done) {
        var _this = this;
        var attacker = this.from;
        var defender = this.to;
        var attackerPlayer = attacker.findComponent(pow2.game.components.PlayerCombatRenderComponent);
        attackerPlayer.magic(function () {
            var attackModel = attacker.model;
            var magicAttack = attackModel.calculateDamage(attackModel.getMagicStrength() + _this.spell.value);
            var damage = defender.model.damage(magicAttack);
            var didKill = defender.model.get('hp') <= 0;
            var hit = damage > 0;
            var hitSound = "sounds/" + (didKill ? "killed" : (hit ? "spell" : "miss"));
            var components = {
                animation: new pow2.tile.components.AnimatedSpriteComponent({
                    spriteName: "attack",
                    lengthMS: 550
                }),
                sprite: new pow2.tile.components.SpriteComponent({
                    name: "attack",
                    icon: hit ? "animHitSpell.png" : "animMiss.png"
                }),
                damage: new damageComponent_1.DamageComponent(),
                sound: new pow2.scene.components.SoundComponent({
                    url: hitSound,
                    volume: 0.3
                })
            };
            defender.addComponentDictionary(components);
            components.damage.once('damage:done', function () {
                if (didKill && defender.model instanceof creatureModel_1.CreatureModel) {
                    _.defer(function () {
                        defender.destroy();
                    });
                }
                defender.removeComponentDictionary(components);
            });
            var data = {
                damage: damage,
                attacker: attacker,
                defender: defender
            };
            _this.combat.machine.notify("combat:attack", data, done);
        });
        return true;
    };
    return CombatMagicComponent;
})(combatActionComponent_1.CombatActionComponent);
exports.CombatMagicComponent = CombatMagicComponent;
//# sourceMappingURL=combatMagicComponent.js.map