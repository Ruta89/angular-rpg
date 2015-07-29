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
var gameWorld_1 = require('../../gameWorld');
var all_1 = require('../../components/combat/actions/all');
var ChooseActionStateMachine = (function (_super) {
    __extends(ChooseActionStateMachine, _super);
    function ChooseActionStateMachine(map, data, submit) {
        _super.call(this);
        this.map = map;
        this.data = data;
        this.current = null;
        this.target = null;
        this.player = null;
        this.action = null;
        this.spell = null;
        this.item = null;
        this.world = gameWorld_1.GameWorld.get();
        this.scene = map.combat.scene;
        this.states = [
            new ChooseActionTarget(),
            new ChooseActionType(),
            new ChooseUsableItem(),
            new ChooseMagicSpell(),
            new ChooseActionSubmit(submit)
        ];
    }
    return ChooseActionStateMachine;
})(pow2.StateMachine);
exports.ChooseActionStateMachine = ChooseActionStateMachine;
var ChooseActionType = (function (_super) {
    __extends(ChooseActionType, _super);
    function ChooseActionType() {
        _super.apply(this, arguments);
        this.name = ChooseActionType.NAME;
    }
    ChooseActionType.prototype.enter = function (machine) {
        var _this = this;
        if (!machine.map || !machine.map.pointer) {
            throw new Error("Requires UIAttachment");
        }
        if (!machine.current) {
            throw new Error("Requires Current Player");
        }
        var p = machine.current;
        machine.player = p.findComponent(pow2.game.components.PlayerCombatRenderComponent);
        if (!machine.player) {
            throw new Error("Requires player render component for combat animations.");
        }
        var pointerOffset = new pow2.Point(-1, -0.25);
        machine.action = machine.target = machine.spell = machine.item = null;
        var selectAction = function (action) {
            machine.action = action;
            machine.scene.off('click', clickSelect);
            if (machine.action instanceof all_1.CombatMagicComponent) {
                if (machine.current.getSpells().length === 1) {
                    machine.spell = machine.current.getSpells()[0];
                    machine.setCurrentState(ChooseActionTarget.NAME);
                }
                else {
                    machine.setCurrentState(ChooseMagicSpell.NAME);
                }
            }
            else if (machine.action instanceof all_1.CombatItemComponent) {
                machine.setCurrentState(ChooseUsableItem.NAME);
            }
            else if (machine.action.canTarget()) {
                machine.setCurrentState(ChooseActionTarget.NAME);
            }
            else {
                machine.setCurrentState(ChooseActionSubmit.NAME);
            }
        };
        var items = _.filter(p.findComponents(all_1.CombatActionComponent), function (c) { return c.canBeUsedBy(p); });
        machine.map.items = _.map(items, function (a) {
            return {
                select: selectAction.bind(_this, a),
                label: a.getActionName()
            };
        });
        var el = $(machine.map.pointer.element);
        if (!p) {
            el.hide();
            return;
        }
        var clickSelect = function (mouse, hits) {
            machine.scene.off('click', clickSelect);
            machine.target = hits[0];
            machine.map.items[0].select();
        };
        machine.player.moveForward(function () {
            machine.map.setPointerTarget(p, "right", pointerOffset);
            el.show();
            machine.scene.on('click', clickSelect);
        });
    };
    ChooseActionType.prototype.exit = function (machine) {
        machine.map.items = [];
    };
    ChooseActionType.NAME = "choose-type";
    return ChooseActionType;
})(pow2.State);
exports.ChooseActionType = ChooseActionType;
var ChooseMagicSpell = (function (_super) {
    __extends(ChooseMagicSpell, _super);
    function ChooseMagicSpell() {
        _super.apply(this, arguments);
        this.name = ChooseMagicSpell.NAME;
    }
    ChooseMagicSpell.prototype.enter = function (machine) {
        var _this = this;
        if (!machine.current) {
            throw new Error("Requires Current Player");
        }
        var selectSpell = function (spell) {
            machine.scene.off('click', clickSelect);
            machine.spell = spell;
            if (spell.benefit) {
                machine.target = machine.current;
            }
            switch (spell.type) {
                case "target":
                    machine.setCurrentState(ChooseActionTarget.NAME);
                    break;
                default:
                    console.info("Unknown spell type, submitting without target: " + spell.type);
                    machine.setCurrentState(ChooseActionSubmit.NAME);
            }
        };
        var spells = machine.current.getSpells();
        machine.map.items = _.map(spells, function (a) {
            return {
                select: selectSpell.bind(_this, a),
                label: a.name
            };
        });
        var clickSelect = function (mouse, hits) {
            machine.scene.off('click', clickSelect);
            machine.target = hits[0];
            machine.map.items[0].select();
        };
        machine.scene.on('click', clickSelect);
    };
    ChooseMagicSpell.prototype.exit = function (machine) {
        machine.map.items = [];
    };
    ChooseMagicSpell.NAME = "choose-spell";
    return ChooseMagicSpell;
})(pow2.State);
exports.ChooseMagicSpell = ChooseMagicSpell;
var ChooseUsableItem = (function (_super) {
    __extends(ChooseUsableItem, _super);
    function ChooseUsableItem() {
        _super.apply(this, arguments);
        this.name = ChooseUsableItem.NAME;
    }
    ChooseUsableItem.prototype.enter = function (machine) {
        var _this = this;
        if (!machine.current) {
            throw new Error("Requires Current Player");
        }
        var selectItem = function (item) {
            machine.item = item;
            machine.target = machine.current;
            machine.setCurrentState(ChooseActionTarget.NAME);
        };
        var items = machine.current.world.model.inventory;
        machine.map.items = _.map(items, function (a) {
            return {
                select: selectItem.bind(_this, a),
                label: a.get('name')
            };
        });
    };
    ChooseUsableItem.prototype.exit = function (machine) {
        machine.map.items = [];
    };
    ChooseUsableItem.NAME = "choose-item";
    return ChooseUsableItem;
})(pow2.State);
exports.ChooseUsableItem = ChooseUsableItem;
var ChooseActionTarget = (function (_super) {
    __extends(ChooseActionTarget, _super);
    function ChooseActionTarget() {
        _super.apply(this, arguments);
        this.name = ChooseActionTarget.NAME;
    }
    ChooseActionTarget.prototype.enter = function (machine) {
        var _this = this;
        if (!machine.map || !machine.map.pointer) {
            throw new Error("Requires UIAttachment");
        }
        var enemies = machine.data.enemies;
        var p = machine.target || enemies[0];
        var el = $(machine.map.pointer.element);
        machine.map.addPointerClass(machine.action.getActionName());
        if (!p) {
            el.hide();
            return;
        }
        var selectTarget = function (target) {
            if (machine.target && machine.target._uid === target._uid) {
                machine.target = target;
                machine.scene.off('click', clickTarget);
                machine.setCurrentState(ChooseActionSubmit.NAME);
                return;
            }
            machine.target = target;
            machine.map.setPointerTarget(target, "left", pointerOffset);
        };
        var beneficial = !!(machine && ((machine.spell && machine.spell.benefit) || machine.item));
        var targets = beneficial ? machine.data.players : machine.data.enemies;
        machine.map.items = _.map(targets, function (a) {
            return {
                select: selectTarget.bind(_this, a),
                label: a.model.attributes.name
            };
        });
        var pointerOffset = new pow2.Point(0.5, -0.25);
        var clickTarget = function (mouse, hits) {
            selectTarget(hits[0]);
        };
        machine.map.setPointerTarget(p, "left", pointerOffset);
        machine.scene.on('click', clickTarget);
    };
    ChooseActionTarget.prototype.exit = function (machine) {
        machine.map.items = [];
    };
    ChooseActionTarget.NAME = "choose-target";
    return ChooseActionTarget;
})(pow2.State);
exports.ChooseActionTarget = ChooseActionTarget;
var ChooseActionSubmit = (function (_super) {
    __extends(ChooseActionSubmit, _super);
    function ChooseActionSubmit(submit) {
        _super.call(this);
        this.submit = submit;
        this.name = ChooseActionSubmit.NAME;
    }
    ChooseActionSubmit.prototype.enter = function (machine) {
        var _this = this;
        if (!machine.current || !machine.action || !this.submit) {
            throw new Error("Invalid state");
        }
        if (machine.action.canTarget() && !machine.target) {
            throw new Error("Invalid target");
        }
        machine.player.moveBackward(function () {
            if (machine.map.pointer) {
                $(machine.map.pointer.element).hide();
            }
            machine.action.from = machine.current;
            machine.action.to = machine.target;
            machine.action.spell = machine.spell;
            machine.action.item = machine.item;
            machine.action.select();
            machine.map.removePointerClass(machine.action.getActionName());
            _this.submit(machine.action);
        });
    };
    ChooseActionSubmit.NAME = "choose-submit";
    return ChooseActionSubmit;
})(pow2.State);
exports.ChooseActionSubmit = ChooseActionSubmit;
//# sourceMappingURL=chooseactionstates.js.map