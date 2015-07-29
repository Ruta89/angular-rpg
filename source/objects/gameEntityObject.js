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
var entityModel_1 = require('../models/entityModel');
var GameEntityObject = (function (_super) {
    __extends(GameEntityObject, _super);
    function GameEntityObject(options) {
        _super.call(this, _.omit(options || {}, ["x", "y", "type"]));
        this.world = pow2.getWorld('rpg');
        this.type = options.type || "player";
        this.groups = typeof options.groups === 'string' ? JSON.parse(options.groups) : options.groups;
        this.model = options.model || new entityModel_1.EntityModel(options);
    }
    GameEntityObject.prototype.isDefeated = function () {
        return this.model.isDefeated();
    };
    GameEntityObject.prototype.getSpells = function () {
        var spells = this.world.spreadsheet.getSheetData('magic');
        var userLevel = this.model.get('level');
        var userClass = this.model.get('type');
        return _.filter(spells, function (spell) {
            return spell.level <= userLevel && _.indexOf(spell.usedby, userClass) !== -1;
        });
    };
    return GameEntityObject;
})(pow2.tile.TileObject);
exports.GameEntityObject = GameEntityObject;
//# sourceMappingURL=gameEntityObject.js.map