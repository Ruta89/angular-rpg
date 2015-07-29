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
var gameTileMap_1 = require('../../gameTileMap');
var CombatEncounterComponent = (function (_super) {
    __extends(CombatEncounterComponent, _super);
    function CombatEncounterComponent() {
        _super.apply(this, arguments);
        this.combatFlag = false;
        this.combatZone = 'default';
        this.isDangerous = false;
        this.enabled = false;
        this.world = pow2.getWorld('rpg');
        this.player = null;
    }
    CombatEncounterComponent.prototype.connectComponent = function () {
        if (!_super.prototype.connectComponent.call(this) || !(this.host instanceof gameTileMap_1.GameTileMap)) {
            return false;
        }
        this.battleCounter = this.world.model.getKeyData('battleCounter');
        if (typeof this.battleCounter === 'undefined') {
            this.resetBattleCounter();
        }
        return true;
    };
    CombatEncounterComponent.prototype.disconnectComponent = function () {
        if (this.player) {
            this.player.off(null, null, this);
        }
        this.player = null;
        return _super.prototype.disconnectComponent.call(this);
    };
    CombatEncounterComponent.prototype.syncComponent = function () {
        _super.prototype.syncComponent.call(this);
        this.enabled = this.host.map && this.host.map.properties && this.host.map.properties.combat;
        this.stopListening();
        this.player = null;
        if (this.host.scene) {
            this.player = this.host.scene.objectByComponent(pow2.scene.components.PlayerComponent);
        }
        this.listenMoves();
        return !!this.player;
    };
    CombatEncounterComponent.prototype.listenMoves = function () {
        this.stopListening();
        if (this.player && this.enabled) {
            this.player.on(pow2.scene.components.PlayerComponent.Events.MOVE_BEGIN, this.moveProcess, this);
        }
    };
    CombatEncounterComponent.prototype.stopListening = function () {
        if (this.player) {
            this.player.off(null, null, this);
        }
    };
    CombatEncounterComponent.prototype.moveProcess = function (player, from, to) {
        var terrain = this.host.getTerrain("Terrain", to.x, to.y);
        this.isDangerous = terrain && terrain.isDangerous;
        var dangerValue = this.isDangerous ? 10 : 6;
        if (this.battleCounter <= 0) {
            this.triggerCombat(to);
        }
        this._setCounter(this.battleCounter - dangerValue);
        return false;
    };
    CombatEncounterComponent.prototype.resetBattleCounter = function () {
        var max = 255;
        var min = 64;
        this._setCounter(Math.floor(Math.random() * (max - min + 1)) + min);
        this.combatFlag = false;
    };
    CombatEncounterComponent.prototype.triggerCombat = function (at) {
        var _this = this;
        var zone = this.host.getCombatZones(at);
        zone.fixed = false;
        this.combatZone = zone.map || zone.target;
        console.log("Combat in zone : " + this.combatZone);
        this.stopListening();
        this.host.world.randomEncounter(zone, function () {
            _this.resetBattleCounter();
            _this.listenMoves();
        });
        this.combatFlag = true;
    };
    CombatEncounterComponent.prototype._setCounter = function (value) {
        this.battleCounter = value;
        this.world.model.setKeyData('battleCounter', this.battleCounter);
    };
    return CombatEncounterComponent;
})(pow2.scene.SceneComponent);
exports.CombatEncounterComponent = CombatEncounterComponent;
//# sourceMappingURL=combatEncounterComponent.js.map