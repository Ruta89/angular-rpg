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
require('../../game');
var Animate = (function () {
    function Animate() {
        this.eventName = this.whichTransitionEvent();
    }
    Animate.prototype.enter = function (el, cssClass) {
        var _this = this;
        return new Promise(function (resolve) {
            el.classList.add(cssClass);
            var duration = _this.getTransitionDuration(el, true);
            var callTimeout = setTimeout(function () { return done(); }, duration);
            var done = function () {
                clearTimeout(callTimeout);
                el.removeEventListener(_this.eventName, done);
                resolve();
            };
            el.addEventListener(_this.eventName, done);
        });
    };
    Animate.prototype.leave = function (el, cssClass) {
        var _this = this;
        return new Promise(function (resolve) {
            var duration = _this.getTransitionDuration(el, true);
            var callTimeout = setTimeout(function () { return done(); }, duration);
            var done = function () {
                clearTimeout(callTimeout);
                el.removeEventListener(_this.eventName, done);
                resolve();
            };
            el.addEventListener(_this.eventName, done);
            el.classList.remove(cssClass);
        });
    };
    Animate.prototype.getTransitionDuration = function (element, includeDelay) {
        if (includeDelay === void 0) { includeDelay = false; }
        var prefixes = ['moz', 'webkit', 'ms', 'o', 'khtml'];
        var style = window.getComputedStyle(element);
        for (var i = 0; i < prefixes.length; i++) {
            var duration = style['-' + prefixes[i] + '-transition-duration'];
            if (!duration) {
                continue;
            }
            duration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
            if (includeDelay) {
                var delay = style['-' + prefixes[i] + '-transition-delay'];
                if (typeof delay !== 'undefined') {
                    duration += (delay.indexOf('ms') > -1) ? parseFloat(delay) : parseFloat(delay) * 1000;
                }
            }
            return duration;
        }
        return 0;
    };
    Animate.prototype.whichTransitionEvent = function () {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };
    return Animate;
})();
exports.Animate = Animate;
//# sourceMappingURL=animate.js.map