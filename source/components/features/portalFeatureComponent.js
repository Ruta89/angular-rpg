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
var PortalFeatureComponent = (function (_super) {
    __extends(PortalFeatureComponent, _super);
    function PortalFeatureComponent() {
        _super.apply(this, arguments);
    }
    PortalFeatureComponent.prototype.syncComponent = function () {
        if (!_super.prototype.syncComponent.call(this)) {
            return false;
        }
        this.map = this.host.feature.target;
        this.target = new pow2.Point(this.host.feature.targetX, this.host.feature.targetY);
        return !!this.map;
    };
    PortalFeatureComponent.prototype.entered = function (object) {
        if (!this.target || !this.host.tileMap) {
            return false;
        }
        object.scene.trigger('portal:entered', {
            map: this.map,
            target: this.target,
        });
        return true;
    };
    return PortalFeatureComponent;
})(gameFeatureComponent_1.GameFeatureComponent);
exports.PortalFeatureComponent = PortalFeatureComponent;
//# sourceMappingURL=portalFeatureComponent.js.map