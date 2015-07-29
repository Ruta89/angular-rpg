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
var DialogFeatureComponent = (function (_super) {
    __extends(DialogFeatureComponent, _super);
    function DialogFeatureComponent() {
        _super.apply(this, arguments);
    }
    DialogFeatureComponent.prototype.syncComponent = function () {
        if (!_super.prototype.syncComponent.call(this) || !this.host.feature) {
            return false;
        }
        this.title = this.host.feature.title;
        this.text = this.host.feature.text;
        this.icon = this.host.feature.icon;
        return true;
    };
    DialogFeatureComponent.prototype.enter = function (object) {
        if (this.title && this.text) {
            object.scene.trigger('dialog:entered', this);
        }
        return true;
    };
    DialogFeatureComponent.prototype.exit = function (object) {
        if (this.title && this.text) {
            object.scene.trigger('dialog:exited', this);
        }
        return true;
    };
    return DialogFeatureComponent;
})(gameFeatureComponent_1.GameFeatureComponent);
exports.DialogFeatureComponent = DialogFeatureComponent;
//# sourceMappingURL=dialogFeatureComponent.js.map