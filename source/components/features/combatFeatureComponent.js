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
var CombatFeatureComponent = (function (_super) {
    __extends(CombatFeatureComponent, _super);
    function CombatFeatureComponent() {
        _super.apply(this, arguments);
        this.party = null;
    }
    CombatFeatureComponent.prototype.connectComponent = function () {
        if (typeof this.host.id === 'undefined') {
            console.error("Fixed encounters must have a given id so they may be hidden");
            return false;
        }
        return _super.prototype.connectComponent.call(this);
    };
    CombatFeatureComponent.prototype.enter = function (object) {
        var _this = this;
        this.party = object.findComponent(pow2.scene.components.PlayerComponent);
        if (!this.party) {
            return false;
        }
        this.party.velocity.zero();
        object.setPoint(object.point);
        var zone = this.host.tileMap.getCombatZones(this.party.host.point);
        zone.fixed = true;
        this.host.world.fixedEncounter(zone, this.host.id, function (victory) {
            if (victory) {
                _this.setDataHidden(true);
            }
        });
        return true;
    };
    return CombatFeatureComponent;
})(gameFeatureComponent_1.GameFeatureComponent);
exports.CombatFeatureComponent = CombatFeatureComponent;
//# sourceMappingURL=combatFeatureComponent.js.map