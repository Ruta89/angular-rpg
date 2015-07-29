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
var Map = (function (_super) {
    __extends(Map, _super);
    function Map(elRef, game) {
        _super.call(this, elRef.nativeElement.querySelector('canvas'), game.loader);
        this.game = game;
        this._music = true;
        this._musicComponent = null;
        this._bounds = new pow2.Point();
    }
    Object.defineProperty(Map.prototype, "mapName", {
        get: function () {
            return this.tileMap ? this.tileMap.name : '';
        },
        set: function (value) {
            this._loadMap(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "music", {
        get: function () {
            return this._music;
        },
        set: function (enabled) {
            if (this._music === enabled) {
                return;
            }
            this._music = enabled;
            this._music ? this._playMusic() : this._destroyMusic();
        },
        enumerable: true,
        configurable: true
    });
    Map.prototype._loadMap = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.game.loader.load(_this.game.world.getMapUrl(value), function (map) {
                if (!map || !map.isReady()) {
                    return reject('invalid resource: ' + _this.game.world.getMapUrl(value));
                }
                if (_this.tileMap) {
                    _this._destroyMusic();
                    _this.tileMap.destroy();
                    _this.tileMap = null;
                }
                _this.tileMap = _this.game.world.entities.createObject('GameMapObject', {
                    resource: map
                });
                if (!_this.tileMap) {
                    return reject('Unable to create tilemap from entity container object');
                }
                _this.setTileMap(_this.tileMap);
                if (_this._music) {
                    _this._playMusic();
                }
                _this.game.world.scene.addObject(_this.tileMap);
                _this._onMapLoaded(_this.tileMap);
                resolve(_this.tileMap);
            });
        });
    };
    Map.prototype._onMapLoaded = function (map) {
    };
    Map.prototype._onResize = function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this._bounds.set(this.canvas.width, this.canvas.height);
        this._bounds = this.screenToWorld(this._bounds);
        var ctx = this.context;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
    };
    Map.prototype._destroyMusic = function () {
        if (this._musicComponent) {
            this.tileMap && this.tileMap.removeComponent(this._musicComponent);
            this._musicComponent = null;
        }
    };
    Map.prototype._playMusic = function () {
        if (!this.tileMap) {
            return;
        }
        if (this.tileMap.musicUrl) {
            this._destroyMusic();
            this._musicComponent = new pow2.scene.components.SoundComponent({
                url: this.tileMap.musicUrl,
                volume: 0.1,
                loop: true
            });
            this.tileMap.addComponent(this._musicComponent);
        }
    };
    return Map;
})(pow2.tile.TileMapView);
exports.Map = Map;
//# sourceMappingURL=map.js.map