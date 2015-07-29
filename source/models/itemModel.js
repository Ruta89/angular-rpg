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
var ItemModel = (function (_super) {
    __extends(ItemModel, _super);
    function ItemModel() {
        _super.apply(this, arguments);
    }
    ItemModel.prototype.defaults = function () {
        return _.extend({}, ItemModel.DEFAULTS);
    };
    ItemModel.DEFAULTS = {
        name: "",
        icon: "",
        cost: 0,
        hero: null,
        usedby: null,
        effects: ""
    };
    return ItemModel;
})(Backbone.Model);
exports.ItemModel = ItemModel;
//# sourceMappingURL=itemModel.js.map