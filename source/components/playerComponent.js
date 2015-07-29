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
var PlayerComponent = (function (_super) {
    __extends(PlayerComponent, _super);
    function PlayerComponent() {
        _super.apply(this, arguments);
        this.map = null;
    }
    PlayerComponent.prototype.collideMove = function (x, y, results) {
        if (results === void 0) { results = []; }
        if (this.host.scene && !this.map) {
            this.map = this.host.scene.objectByType(pow2.tile.TileMap);
        }
        var collision = this.collider && this.collider.collide(x, y, gameFeatureObject_1.GameFeatureObject, results);
        if (collision) {
            for (var i = 0; i < results.length; i++) {
                var o = results[i];
                if (o.passable === true || !o.type) {
                    return false;
                }
                if (_.indexOf(PlayerComponent.COLLIDE_TYPES, o.type) !== -1) {
                    return true;
                }
            }
        }
        if (this.map) {
            var layers = this.map.getLayers();
            for (var i = 0; i < layers.length; i++) {
                var terrain = this.map.getTileData(layers[i], x, y);
                if (!terrain) {
                    continue;
                }
                for (var j = 0; j < this.passableKeys.length; j++) {
                    if (terrain[this.passableKeys[j]] === false) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    PlayerComponent.COLLIDE_TYPES = [
        'source.components.features.TempleFeatureComponent',
        'source.components.features.StoreFeatureComponent',
        'source.components.features.DialogFeatureComponent',
        'sign'
    ];
    return PlayerComponent;
})(pow2.scene.components.PlayerComponent);
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=playerComponent.js.map