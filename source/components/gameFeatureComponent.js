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
var GameFeatureComponent = (function (_super) {
    __extends(GameFeatureComponent, _super);
    function GameFeatureComponent() {
        _super.apply(this, arguments);
    }
    GameFeatureComponent.prototype.connectComponent = function () {
        if (!_super.prototype.connectComponent.call(this)) {
            return false;
        }
        if (!this.host.feature) {
            console.log("Feature host missing feature data.");
            return false;
        }
        this.id = this.host.feature.id;
        return true;
    };
    GameFeatureComponent.prototype.syncComponent = function () {
        if (!_super.prototype.syncComponent.call(this)) {
            return false;
        }
        this.host.visible = this.host.enabled = !this.getDataHidden();
        return true;
    };
    GameFeatureComponent.prototype.setDataHidden = function (hidden) {
        if (hidden === void 0) { hidden = true; }
        if (this.host && this.host.world && this.host.world.model && this.host.id) {
            this.host.world.model.setKeyData('' + this.host.id, {
                hidden: hidden
            });
            this.syncComponent();
        }
    };
    GameFeatureComponent.prototype.getDataHidden = function () {
        if (this.host && this.host.world && this.host.world.model && this.host.id) {
            var data = this.host.world.model.getKeyData('' + this.host.id);
            if (data && data.hidden) {
                return true;
            }
        }
        return false;
    };
    return GameFeatureComponent;
})(pow2.tile.TileComponent);
exports.GameFeatureComponent = GameFeatureComponent;
//# sourceMappingURL=gameFeatureComponent.js.map