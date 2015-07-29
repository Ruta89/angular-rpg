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
var all_1 = require('./all');
var UsableModel = (function (_super) {
    __extends(UsableModel, _super);
    function UsableModel() {
        _super.apply(this, arguments);
    }
    UsableModel.prototype.defaults = function () {
        return _.extend(_super.prototype.defaults.call(this), UsableModel.DEFAULTS);
    };
    UsableModel.prototype.use = function (on) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var matches = UsableModel.FN_MATCHER.exec(_this.attributes.effects);
            if (matches.length !== 3) {
                return reject('invalid effects expression: ' + _this.attributes.effects);
            }
            var host = _this;
            var delegate = host[matches[1]];
            if (!delegate) {
                return reject('invalid effect function in expression: ' + matches[0]);
            }
            console.warn("USING ITEM: " + _this.attributes.name);
            delegate.call(_this, on, matches[2]);
            resolve(_this);
        });
    };
    UsableModel.prototype.heal = function (target, parameters) {
        console.warn("Healing  " + target.get('name'));
        var value = parseInt(parameters) || 0;
        if (value !== 0) {
            target.damage(-value);
        }
    };
    UsableModel.DEFAULTS = {
        name: "Invalid Item",
        icon: "",
        effects: [],
        cost: 0
    };
    UsableModel.FN_MATCHER = /([a-z|A-Z|0-9]+)\((.*)\)/g;
    return UsableModel;
})(all_1.ItemModel);
exports.UsableModel = UsableModel;
//# sourceMappingURL=usableModel.js.map