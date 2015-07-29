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
var rpggame_1 = require('./rpggame');
var animate_1 = require('./animate');
var Notify = (function () {
    function Notify(game, animate) {
        var _this = this;
        this.game = game;
        this.animate = animate;
        this.paused = false;
        this.animationClass = 'active';
        this.message = null;
        this.defaultTimeout = 2500;
        this._container = null;
        this._current = null;
        this._queue = [];
        this._dismissBinding = null;
        this.game.world.mark(this);
        this.game.world.time.addObject(this);
        this._dismissBinding = function (e) {
            _this.dismiss();
        };
    }
    Object.defineProperty(Notify.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (value) {
            if (this._container) {
                this._container.removeEventListener('click', this._dismissBinding);
            }
            this._container = value;
            if (this._container) {
                this._container.addEventListener('click', this._dismissBinding);
            }
        },
        enumerable: true,
        configurable: true
    });
    Notify.prototype.destroy = function () {
        this.game.world.time.removeObject(this);
        this.game.world.erase(this);
        if (this.container) {
            this.container.removeEventListener('click', this._dismissBinding);
        }
    };
    Notify.prototype.show = function (message, done, duration) {
        var obj = {
            message: message,
            duration: typeof duration === 'undefined' ? this.defaultTimeout : duration,
            done: done
        };
        return this.queue(obj);
    };
    Notify.prototype.dismiss = function () {
        var _this = this;
        if (!this._current || this.paused) {
            return;
        }
        this.paused = true;
        this.animate.leave(this.container, this.animationClass).then(function () {
            if (_this._current) {
                try {
                    _this._current.done && _this._current.done(_this._current);
                }
                catch (e) {
                    console.log(e);
                }
                _this._current = null;
                _this.message = null;
            }
            _this.paused = false;
        });
        if (this._current) {
            this._current.dismissed = true;
        }
    };
    Notify.prototype.queue = function (config) {
        config.elapsed = 0;
        this._queue.push(config);
        return config;
    };
    Notify.prototype.processFrame = function (elapsed) {
        var _this = this;
        if (this._current && this.paused !== true) {
            var c = this._current;
            var timeout = c.duration && c.elapsed > c.duration;
            var dismissed = c.dismissed === true;
            if (!timeout && !dismissed) {
                c.elapsed += elapsed;
                return;
            }
            this.dismiss();
        }
        if (this.paused || this._queue.length === 0) {
            return;
        }
        this._current = this._queue.shift();
        this.paused = true;
        this.message = this._current.message;
        this.animate.enter(this.container, this.animationClass).then(function () {
            _this.paused = false;
        });
    };
    Notify = __decorate([
        angular2_1.Inject(rpggame_1.RPGGame, animate_1.Animate), 
        __metadata('design:paramtypes', [rpggame_1.RPGGame, animate_1.Animate])
    ], Notify);
    return Notify;
})();
exports.Notify = Notify;
//# sourceMappingURL=notify.js.map