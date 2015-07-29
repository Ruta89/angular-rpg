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
var combatBeginTurnState_1 = require('./combatBeginTurnState');
var combatChooseActionState_1 = require('./combatChooseActionState');
var combatDefeatState_1 = require('./combatDefeatState');
var combatEndTurnState_1 = require('./combatEndTurnState');
var combatEscapeState_1 = require('./combatEscapeState');
var combatStartState_1 = require('./combatStartState');
var combatVictoryState_1 = require('./combatVictoryState');
var CombatStateMachine = (function (_super) {
    __extends(CombatStateMachine, _super);
    function CombatStateMachine(parent) {
        _super.call(this);
        this.defaultState = combatStartState_1.CombatStartState.NAME;
        this.states = [
            new combatStartState_1.CombatStartState(),
            new combatVictoryState_1.CombatVictoryState(),
            new combatDefeatState_1.CombatDefeatState(),
            new combatBeginTurnState_1.CombatBeginTurnState(),
            new combatChooseActionState_1.CombatChooseActionState(),
            new combatEndTurnState_1.CombatEndTurnState(),
            new combatEscapeState_1.CombatEscapeState()
        ];
        this.party = [];
        this.enemies = [];
        this.turnList = [];
        this.playerChoices = {};
        this.currentDone = false;
        this.parent = parent;
    }
    CombatStateMachine.prototype.isFriendlyTurn = function () {
        var _this = this;
        return this.current && !!_.find(this.party, function (h) {
            return h._uid === _this.current._uid;
        });
    };
    CombatStateMachine.prototype.getLiveParty = function () {
        return _.reject(this.party, function (obj) {
            return obj.isDefeated();
        });
    };
    CombatStateMachine.prototype.getLiveEnemies = function () {
        return _.reject(this.enemies, function (obj) {
            return obj.isDefeated();
        });
    };
    CombatStateMachine.prototype.getRandomPartyMember = function () {
        var players = _.shuffle(this.party);
        while (players.length > 0) {
            var p = players.shift();
            if (!p.isDefeated()) {
                return p;
            }
        }
        return null;
    };
    CombatStateMachine.prototype.getRandomEnemy = function () {
        var players = _.shuffle(this.enemies);
        while (players.length > 0) {
            var p = players.shift();
            if (!p.isDefeated()) {
                return p;
            }
        }
        return null;
    };
    CombatStateMachine.prototype.partyDefeated = function () {
        var deadList = _.reject(this.party, function (obj) {
            return obj.model.attributes.hp <= 0;
        });
        return deadList.length === 0;
    };
    CombatStateMachine.prototype.enemiesDefeated = function () {
        return _.reject(this.enemies, function (obj) {
            return obj.model.attributes.hp <= 0;
        }).length === 0;
    };
    return CombatStateMachine;
})(pow2.StateMachine);
exports.CombatStateMachine = CombatStateMachine;
//# sourceMappingURL=combatStateMachine.js.map