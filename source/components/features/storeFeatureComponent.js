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
var StoreFeatureComponent = (function (_super) {
    __extends(StoreFeatureComponent, _super);
    function StoreFeatureComponent() {
        _super.apply(this, arguments);
    }
    StoreFeatureComponent.prototype.syncComponent = function () {
        var _this = this;
        if (!_super.prototype.syncComponent.call(this)) {
            return false;
        }
        this.name = this.host.feature.name;
        var weapons = _.indexOf(this.host.groups, "weapon") !== -1;
        if (weapons) {
            this.inventory = _.filter(pow2.data.weapons, function (item) {
                return item.level === _this.host.feature.level;
            });
        }
        else if (_.indexOf(this.host.groups, "armor") !== -1) {
            this.inventory = _.filter(pow2.data.armor, function (item) {
                return item.level === _this.host.feature.level;
            });
        }
        return true;
    };
    StoreFeatureComponent.prototype.disconnectComponent = function () {
        this.inventory = null;
        return _super.prototype.disconnectComponent.call(this);
    };
    StoreFeatureComponent.prototype.enter = function (object) {
        object.scene.trigger('store:entered', this);
        return true;
    };
    StoreFeatureComponent.prototype.exit = function (object) {
        object.scene.trigger('store:exited', this);
        return true;
    };
    return StoreFeatureComponent;
})(gameFeatureComponent_1.GameFeatureComponent);
exports.StoreFeatureComponent = StoreFeatureComponent;
//# sourceMappingURL=storeFeatureComponent.js.map