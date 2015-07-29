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
var gameStateModel_1 = require('../models/gameStateModel');
var playerMapState_1 = require('./playerMapState');
var playerCombatState_1 = require('./playerCombatState');
var PlayerDefaultState = (function (_super) {
    __extends(PlayerDefaultState, _super);
    function PlayerDefaultState() {
        _super.apply(this, arguments);
        this.name = PlayerDefaultState.NAME;
    }
    PlayerDefaultState.NAME = "default";
    return PlayerDefaultState;
})(pow2.State);
exports.PlayerDefaultState = PlayerDefaultState;
var GameStateMachine = (function (_super) {
    __extends(GameStateMachine, _super);
    function GameStateMachine() {
        _super.apply(this, arguments);
        this.model = null;
        this.defaultState = PlayerDefaultState.NAME;
        this.player = null;
        this.encounterInfo = null;
        this.encounter = null;
        this.states = [
            new PlayerDefaultState(),
            new playerMapState_1.PlayerMapState(),
            new playerCombatState_1.PlayerCombatState()
        ];
    }
    GameStateMachine.prototype.onAddToWorld = function (world) {
        _super.prototype.onAddToWorld.call(this, world);
        gameStateModel_1.GameStateModel.getDataSource();
        this.model = world.model || new gameStateModel_1.GameStateModel();
    };
    GameStateMachine.prototype.setCurrentState = function (newState) {
        if (this.world && this.world.scene) {
            var scene = this.world.scene;
            this.player = scene.objectByComponent(pow2.scene.components.PlayerComponent);
        }
        return _super.prototype.setCurrentState.call(this, newState);
    };
    return GameStateMachine;
})(pow2.StateMachine);
exports.GameStateMachine = GameStateMachine;
//# sourceMappingURL=gameStateMachine.js.map