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
var TreasureFeatureComponent = (function (_super) {
    __extends(TreasureFeatureComponent, _super);
    function TreasureFeatureComponent() {
        _super.apply(this, arguments);
    }
    TreasureFeatureComponent.prototype.connectComponent = function () {
        if (typeof this.host.id === 'undefined') {
            console.error("Treasure must have a given id so it may be hidden");
            return false;
        }
        return _super.prototype.connectComponent.call(this);
    };
    TreasureFeatureComponent.prototype.syncComponent = function () {
        if (!_super.prototype.syncComponent.call(this) || !this.host.feature) {
            return false;
        }
        this.name = "Treasure Chest";
        this.gold = this.host.feature.gold;
        this.item = this.host.feature.item;
        this.icon = this.host.feature.icon;
        return true;
    };
    TreasureFeatureComponent.prototype.enter = function (object) {
        object.scene.trigger('treasure:entered', this);
        this.setDataHidden(true);
        return true;
    };
    return TreasureFeatureComponent;
})(gameFeatureComponent_1.GameFeatureComponent);
exports.TreasureFeatureComponent = TreasureFeatureComponent;
//# sourceMappingURL=treasureFeatureComponent.js.map