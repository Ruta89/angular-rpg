var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var combatActionComponent_1 = require('./combatActionComponent');
var combatEndTurnState_1 = require('../../../states/combat/combatEndTurnState');
var all_1 = require('../../../models/all');
var CombatItemComponent = (function (_super) {
    __extends(CombatItemComponent, _super);
    function CombatItemComponent() {
        _super.apply(this, arguments);
        this.name = "item";
    }
    CombatItemComponent.prototype.canBeUsedBy = function (entity) {
        return _super.prototype.canBeUsedBy.call(this, entity)
            && entity.world && entity.world.model && entity.world.model.inventory
            && _.filter(entity.world.model.inventory, function (i) { return i instanceof all_1.UsableModel; }).length > 0;
    };
    CombatItemComponent.prototype.act = function (then) {
        var _this = this;
        if (!this.isCurrentTurn()) {
            return false;
        }
        var done = function (error) {
            then && then(_this, error);
            _this.combat.machine.setCurrentState(combatEndTurnState_1.CombatEndTurnState.NAME);
        };
        if (!this.item) {
            return done();
        }
        return this.useItem(done);
    };
    CombatItemComponent.prototype.useItem = function (done) {
        var _this = this;
        var user = this.from;
        var target = this.to;
        var userRender = user.findComponent(pow2.game.components.PlayerCombatRenderComponent);
        userRender.magic(function () {
            _this.item.use(target.model).then(function () {
                user.world.model.removeInventory(_this.item);
            });
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
                done();
            });
        });
        return true;
    };
    return CombatItemComponent;
})(combatActionComponent_1.CombatActionComponent);
exports.CombatItemComponent = CombatItemComponent;
//# sourceMappingURL=combatItemComponent.js.map