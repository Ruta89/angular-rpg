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
var gameFeatureObject_1 = require('../objects/gameFeatureObject');
var GameFeatureInputComponent = (function (_super) {
    __extends(GameFeatureInputComponent, _super);
    function GameFeatureInputComponent() {
        _super.apply(this, arguments);
        this.hitBox = new pow2.Rect(0, 0, 1, 1);
        this.hits = [];
        this.mouse = null;
    }
    GameFeatureInputComponent.prototype.syncComponent = function () {
        if (!_super.prototype.syncComponent.call(this) || !this.host.scene || !this.host.scene.world || !this.host.scene.world.input) {
            return false;
        }
        this.mouse = this.host.scene.world.input.getMouseHook("world");
        return !!this.mouse;
    };
    GameFeatureInputComponent.prototype.tick = function (elapsed) {
        if (!this.host.scene || !this.mouse) {
            return;
        }
        _.each(this.hits, function (tile) {
            tile.scale = 1;
        });
        this.hits.length = 0;
        this.hitBox.point.set(this.mouse.world);
        this.host.scene.db.queryRect(this.hitBox, gameFeatureObject_1.GameFeatureObject, this.hits);
        _.each(this.hits, function (obj) {
            obj.scale = 1.25;
        });
        _super.prototype.tick.call(this, elapsed);
    };
    return GameFeatureInputComponent;
})(pow2.scene.components.TickedComponent);
exports.GameFeatureInputComponent = GameFeatureInputComponent;
//# sourceMappingURL=gameFeatureInputComponent.js.map