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
var heroModel_1 = require('../../models/heroModel');
var RPGGame = (function () {
    function RPGGame() {
        this.styleBackground = 'rgba(0,0,0,1)';
        this._canvasAcquired = false;
        this._stateKey = "_angular2PowRPGState";
        this.partyPosition = new pow2.Point(0, 0);
        this.partyMapName = 'town';
        this.party = [];
        this.inventory = [];
        this.player = null;
        this._renderCanvas = document.createElement('canvas');
        this._renderCanvas.width = this._renderCanvas.height = 64;
        this._renderCanvas.style.position = 'absolute';
        this._renderCanvas.style.left = this._renderCanvas.style.top = '-9000px';
        this.loader = new pow2.ResourceLoader();
        this.world = pow2.getWorld('rpg');
        this.machine = this.world.state;
        this.world.time.start();
    }
    RPGGame.prototype.getSaveData = function () {
        return localStorage.getItem(this._stateKey);
    };
    RPGGame.prototype.resetGame = function () {
        localStorage.removeItem(this._stateKey);
    };
    RPGGame.prototype.saveGame = function () {
        var party = this.world.scene.componentByType(pow2.scene.components.PlayerComponent);
        if (party) {
            this.world.model.setKeyData('playerPosition', party.host.point);
        }
        this.world.model.setKeyData('playerMap', this.partyMapName);
        var data = JSON.stringify(this.world.model.toJSON());
        localStorage.setItem(this._stateKey, data);
    };
    RPGGame.prototype.createPlayer = function (from, tileMap, at) {
        if (!from) {
            throw new Error("Cannot create player without valid model");
        }
        if (!this.world.entities.isReady()) {
            throw new Error("Cannot create player before entities container is loaded");
        }
        if (this.sprite) {
            this.sprite.destroy();
            this.sprite = null;
        }
        this.sprite = this.world.entities.createObject('GameMapPlayer', {
            model: from,
            map: tileMap
        });
        if (!this.sprite) {
            throw new Error("Failed to create map player");
        }
        this.sprite.name = from.attributes.name;
        this.sprite.icon = from.attributes.icon;
        this.world.scene.addObject(this.sprite);
        if (typeof at === 'undefined' && tileMap instanceof pow2.tile.TileMap && this.partyPosition.isZero()) {
            var portal = _.where(tileMap.features.objects, { type: 'source.components.features.PortalFeatureComponent' })[0];
            if (portal) {
                at = new pow2.Point(portal.x / portal.width, portal.y / portal.height);
            }
        }
        this.sprite.setPoint(at || this.partyPosition);
    };
    RPGGame.prototype.initGame = function (data) {
        var _this = this;
        if (data === void 0) { data = this.getSaveData(); }
        return new Promise(function (resolve, reject) {
            if (data) {
                return _this.world.model.initData(function () {
                    _this.world.model.parse(data);
                    var at = _this.world.model.getKeyData('playerPosition');
                    _this.partyPosition = at ? new pow2.Point(at.x, at.y) : undefined;
                    _this.partyMapName = _this.world.model.getKeyData('playerMap') || "town";
                    resolve(false);
                });
            }
            else {
                _this.world.model.addHero(heroModel_1.HeroModel.create(heroModel_1.HeroTypes.Warrior, "Warrior"));
                _this.world.model.addHero(heroModel_1.HeroModel.create(heroModel_1.HeroTypes.Ranger, "Ranger"));
                _this.world.model.addHero(heroModel_1.HeroModel.create(heroModel_1.HeroTypes.LifeMage, "Mage"));
                _this.partyPosition = new pow2.Point(10, 5);
                _this.partyMapName = "town";
                resolve(true);
            }
        });
    };
    RPGGame.prototype.getRenderContext = function (width, height) {
        if (this._canvasAcquired) {
            throw new Error("Only one rendering canvas is available at a time.  Check for calls to this function without corresponding releaseCanvas() calls.");
        }
        this._canvasAcquired = true;
        this._renderCanvas.width = width;
        this._renderCanvas.height = height;
        var context = this._renderCanvas.getContext('2d');
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        return context;
    };
    RPGGame.prototype.releaseRenderContext = function () {
        this._canvasAcquired = false;
        return this._renderCanvas.toDataURL();
    };
    return RPGGame;
})();
exports.RPGGame = RPGGame;
//# sourceMappingURL=rpggame.js.map