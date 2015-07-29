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
var heroModel_1 = require('../../../models/heroModel');
var creatureModel_1 = require('../../../models/creatureModel');
var combatEndTurnState_1 = require('../../../states/combat/combatEndTurnState');
var combatActionComponent_1 = require('./combatActionComponent');
var damageComponent_1 = require('../../damageComponent');
var CombatAttackComponent = (function (_super) {
    __extends(CombatAttackComponent, _super);
    function CombatAttackComponent() {
        _super.apply(this, arguments);
        this.name = "attack";
    }
    CombatAttackComponent.prototype.canBeUsedBy = function (entity) {
        var excludedTypes = [
            heroModel_1.HeroTypes.LifeMage,
            heroModel_1.HeroTypes.Necromancer
        ];
        return _super.prototype.canBeUsedBy.call(this, entity) && _.indexOf(excludedTypes, entity.model.get('type')) === -1;
    };
    CombatAttackComponent.prototype.act = function (then) {
        var _this = this;
        if (!this.isCurrentTurn()) {
            return false;
        }
        var done = function (error) {
            then && then(_this, error);
            _this.combat.machine.setCurrentState(combatEndTurnState_1.CombatEndTurnState.NAME);
        };
        var attacker = this.from;
        var defender = this.to;
        var attackerPlayer = attacker.findComponent(pow2.game.components.PlayerCombatRenderComponent);
        var attack = function () {
            var damage = attacker.model.attack(defender.model);
            var didKill = defender.model.get('hp') <= 0;
            var hit = damage > 0;
            var defending = (defender.model instanceof heroModel_1.HeroModel) && defender.model.defenseBuff > 0;
            var hitSound = "sounds/" + (didKill ? "killed" : (hit ? (defending ? "miss" : "hit") : "miss"));
            var components = {
                animation: new pow2.tile.components.AnimatedSpriteComponent({
                    spriteName: "attack",
                    lengthMS: 350
                }),
                sprite: new pow2.tile.components.SpriteComponent({
                    name: "attack",
                    icon: hit ? (defending ? "animSmoke.png" : "animHit.png") : "animMiss.png"
                }),
                damage: new damageComponent_1.DamageComponent(),
                sound: new pow2.scene.components.SoundComponent({
                    url: hitSound,
                    volume: 0.3
                })
            };
            if (!!attackerPlayer) {
                attackerPlayer.setState("Moving");
            }
            defender.addComponentDictionary(components);
            components.damage.once('damage:done', function () {
                if (!!attackerPlayer) {
                    attackerPlayer.setState();
                }
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
        };
        if (!!attackerPlayer) {
            attackerPlayer.attack(attack);
        }
        else {
            _.delay(function () {
                attack();
            }, 1000);
        }
        return true;
    };
    return CombatAttackComponent;
})(combatActionComponent_1.CombatActionComponent);
exports.CombatAttackComponent = CombatAttackComponent;
//# sourceMappingURL=combatAttackComponent.js.map