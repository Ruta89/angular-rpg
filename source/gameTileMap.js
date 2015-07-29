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
var gameFeatureObject_1 = require('./objects/gameFeatureObject');
var GameTileMap = (function (_super) {
    __extends(GameTileMap, _super);
    function GameTileMap() {
        _super.apply(this, arguments);
    }
    GameTileMap.prototype.loaded = function () {
        _super.prototype.loaded.call(this);
        this.musicUrl = '';
        if (this.map.properties && this.map.properties.music) {
            this.musicUrl = this.map.properties.music;
        }
        this.buildFeatures();
    };
    GameTileMap.prototype.destroy = function () {
        this.unloaded();
        return _super.prototype.destroy.call(this);
    };
    GameTileMap.prototype.unloaded = function () {
        this.removeFeaturesFromScene();
        _super.prototype.unloaded.call(this);
    };
    GameTileMap.prototype.getFeature = function (name) {
        return _.find(this.features.objects, function (feature) {
            return feature.name === name;
        });
    };
    GameTileMap.prototype.addFeaturesToScene = function () {
        var _this = this;
        _.each(this.features.objects, function (obj) {
            obj._object = _this.createFeatureObject(obj);
            if (obj._object) {
                _this.scene.addObject(obj._object);
            }
        });
    };
    GameTileMap.prototype.removeFeaturesFromScene = function () {
        _.each(this.features.objects, function (obj) {
            var featureObject = obj._object;
            delete obj._object;
            if (featureObject) {
                featureObject.destroy();
            }
        });
    };
    GameTileMap.prototype.buildFeatures = function () {
        this.removeFeaturesFromScene();
        if (this.scene) {
            this.addFeaturesToScene();
        }
        return true;
    };
    GameTileMap.prototype.createFeatureObject = function (tiledObject) {
        var options = _.extend({}, tiledObject.properties || {}, {
            tileMap: this,
            type: tiledObject.type,
            x: Math.round(tiledObject.x / this.map.tilewidth),
            y: Math.round(tiledObject.y / this.map.tileheight)
        });
        var object = new gameFeatureObject_1.GameFeatureObject(options);
        this.world.mark(object);
        var componentType = tiledObject.type === 'alert' ? null : pow2.EntityContainerResource.getClassType(tiledObject.type);
        if (tiledObject.type && componentType) {
            var component = (new componentType());
            if (!object.addComponent(component)) {
                throw new Error("Component " + component.name + " failed to connect to host " + this.name);
            }
        }
        return object;
    };
    GameTileMap.prototype.getCombatZones = function (at) {
        var result = {
            map: null,
            target: null,
            targetPoint: at,
            fixed: false
        };
        if (this.map && this.map.properties && this.map.properties) {
            if (typeof this.map.properties.combatZone !== 'undefined') {
                result.map = this.map.properties.combatZone;
            }
        }
        var invTileSize = 1 / this.map.tilewidth;
        var zones = _.map(this.zones.objects, function (z) {
            var x = z.x * invTileSize;
            var y = z.y * invTileSize;
            var w = z.width * invTileSize;
            var h = z.height * invTileSize;
            return {
                bounds: new pow2.Rect(x, y, w, h),
                name: z.name
            };
        });
        var zone = _.find(zones, function (z) {
            return z.bounds.pointInRect(at) && z.name;
        });
        if (zone) {
            result.target = zone.name;
        }
        return result;
    };
    return GameTileMap;
})(pow2.tile.TileMap);
exports.GameTileMap = GameTileMap;
//# sourceMappingURL=gameTileMap.js.map