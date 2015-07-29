var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var all_1 = require('../services/all');
var RPGSprite = (function () {
    function RPGSprite(game) {
        this.game = game;
        this.dataUrl = '';
        this.width = '64';
        this.height = '64';
        this.renderer = new pow2.SpriteRender();
        this._frame = 0;
        this._name = RPGSprite.INVALID_IMAGE;
        pow2.getWorld('rpg').mark(this.renderer);
    }
    Object.defineProperty(RPGSprite.prototype, "frame", {
        get: function () {
            return this._frame;
        },
        set: function (value) {
            if (this._frame !== value) {
                this._frame = value;
                this._get();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RPGSprite.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (!value) {
                this._name = RPGSprite.INVALID_IMAGE;
                return;
            }
            this._name = value;
            this._get();
        },
        enumerable: true,
        configurable: true
    });
    RPGSprite.prototype._get = function () {
        var _this = this;
        this.renderer.getSingleSprite(this._name, this._frame, function (sprite) {
            var width = parseInt(_this.width);
            var height = parseInt(_this.height);
            var renderContext = _this.game.getRenderContext(width, height);
            renderContext.clearRect(0, 0, width, height);
            renderContext.drawImage(sprite, 0, 0, width, height);
            _this.dataUrl = _this.game.releaseRenderContext();
        });
    };
    RPGSprite.INVALID_IMAGE = 'images/a/blank.gif';
    RPGSprite = __decorate([
        angular2_1.Component({
            selector: 'rpg-sprite',
            properties: ['name', 'frame', 'width', 'height'],
            host: {
                '[style.width]': 'width',
                '[style.height]': 'height'
            }
        }),
        angular2_1.View({
            template: "<img [src]=\"dataUrl\">"
        }), 
        __metadata('design:paramtypes', [all_1.RPGGame])
    ], RPGSprite);
    return RPGSprite;
})();
exports.RPGSprite = RPGSprite;
//# sourceMappingURL=rpgsprite.js.map