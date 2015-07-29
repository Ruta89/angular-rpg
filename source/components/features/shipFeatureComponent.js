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
var gameFeatureComponent_1 = require('../gameFeatureComponent');
var ShipFeatureComponent = (function (_super) {
    __extends(ShipFeatureComponent, _super);
    function ShipFeatureComponent() {
        _super.apply(this, arguments);
        this._tickInterval = -1;
    }
    ShipFeatureComponent.prototype.syncComponent = function () {
        if (_super.prototype.syncComponent.call(this)) {
            var gameWorld = this.host.world;
            if (gameWorld && gameWorld.state) {
                var gameState = gameWorld.state.model;
                var location = gameState.getKeyData('shipPosition');
                if (location) {
                    this.host.setPoint(new pow2.Point(location.x, location.y));
                }
            }
        }
        return false;
    };
    ShipFeatureComponent.prototype.enter = function (object) {
        this.party = object.findComponent(pow2.scene.components.PlayerComponent);
        if (!this.party) {
            return false;
        }
        this.partySprite = object.icon;
        this.party.passableKeys = ['shipPassable'];
        return true;
    };
    ShipFeatureComponent.prototype.entered = function (object) {
        return this.board(object);
    };
    ShipFeatureComponent.prototype.board = function (object) {
        var _this = this;
        if (this.partyObject || !this.party) {
            return false;
        }
        this.partyObject = object;
        object.setSprite(this.host.icon);
        this.host.visible = false;
        this.host.enabled = false;
        this._tickInterval = setInterval(function () {
            if (_this.partyObject.point.equal(_this.party.targetPoint) && !_this.party.heading.isZero()) {
                var from = _this.partyObject.point;
                var to = from.clone().add(_this.party.heading);
                if (!_this.party.collideWithMap(from, 'shipPassable') && !_this.party.collideWithMap(to, 'passable')) {
                    _this.disembark(from, to, _this.party.heading.clone());
                }
            }
        }, 32);
        return true;
    };
    ShipFeatureComponent.prototype.disembark = function (from, to, heading) {
        clearInterval(this._tickInterval);
        this.partyObject.setSprite(this.partySprite);
        this.party.targetPoint.set(to);
        this.party.velocity.set(heading);
        this.party.passableKeys = ['passable'];
        this.host.point.set(from);
        this.host.visible = true;
        this.host.enabled = true;
        this.partyObject = null;
        this.party = null;
        var gameWorld = this.host.world;
        if (gameWorld && gameWorld.state && gameWorld.state.model) {
            gameWorld.state.model.setKeyData('shipPosition', this.host.point);
        }
    };
    return ShipFeatureComponent;
})(gameFeatureComponent_1.GameFeatureComponent);
exports.ShipFeatureComponent = ShipFeatureComponent;
//# sourceMappingURL=shipFeatureComponent.js.map