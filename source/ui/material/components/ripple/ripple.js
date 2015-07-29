/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MaterialRipple = (function () {
    function MaterialRipple(element_) {
        this.element_ = element_;
        this.ignoringMouseDown_ = false;
        this.frameCount_ = 0;
        this.x_ = 0;
        this.y_ = 0;
        this.rippleSize_ = 0;
        this.boundWidth = 0;
        this.boundHeight = 0;
        'use strict';
        var rippleContainer = document.createElement('span');
        rippleContainer.classList.add(MaterialRipple.CssClasses.RIPPLE_CONTAINER);
        this.rippleElement_ = document.createElement('span');
        this.rippleElement_.classList.add(MaterialRipple.CssClasses.RIPPLE);
        rippleContainer.appendChild(this.rippleElement_);
        this.element_.appendChild(rippleContainer);
        this.boundDownHandler = this.downHandler_.bind(this);
        this.element_.addEventListener('mousedown', this.boundDownHandler);
        this.element_.addEventListener('touchstart', this.boundDownHandler);
        this.boundUpHandler = this.upHandler_.bind(this);
        this.element_.addEventListener('mouseup', this.boundUpHandler);
        this.element_.addEventListener('mouseleave', this.boundUpHandler);
        this.element_.addEventListener('touchend', this.boundUpHandler);
        this.element_.addEventListener('blur', this.boundUpHandler);
    }
    MaterialRipple.prototype.destroy = function () {
        'use strict';
        this.element_.removeEventListener('mousedown', this.boundDownHandler);
        this.element_.removeEventListener('touchstart', this.boundDownHandler);
        this.element_.removeEventListener('mouseup', this.boundUpHandler);
        this.element_.removeEventListener('mouseleave', this.boundUpHandler);
        this.element_.removeEventListener('touchend', this.boundUpHandler);
        this.element_.removeEventListener('blur', this.boundUpHandler);
    };
    MaterialRipple.prototype.getFrameCount = function () {
        return this.frameCount_;
    };
    MaterialRipple.prototype.setFrameCount = function (fC) {
        this.frameCount_ = fC;
    };
    MaterialRipple.prototype.setRippleXY = function (newX, newY) {
        this.x_ = newX;
        this.y_ = newY;
    };
    MaterialRipple.prototype.setRippleStyles = function (start) {
        var recentering = this.element_.classList.contains(MaterialRipple.CssClasses.RIPPLE_CENTER);
        var scale;
        var size;
        var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';
        if (start) {
            scale = MaterialRipple.Constant_.INITIAL_SCALE;
            size = MaterialRipple.Constant_.INITIAL_SIZE;
        }
        else {
            scale = MaterialRipple.Constant_.FINAL_SCALE;
            size = this.rippleSize_ + 'px';
            if (recentering) {
                offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
            }
        }
        var transformString = 'translate(-50%, -50%) ' + offset + scale;
        var style = this.rippleElement_.style;
        style.webkitTransform = transformString;
        style.msTransform = transformString;
        style.transform = transformString;
        if (start) {
            this.rippleElement_.classList.remove(MaterialRipple.CssClasses.IS_ANIMATING);
        }
        else {
            this.rippleElement_.classList.add(MaterialRipple.CssClasses.IS_ANIMATING);
        }
    };
    MaterialRipple.prototype.animFrameHandler = function () {
        if (this.frameCount_-- > 0) {
            window.requestAnimationFrame(this.animFrameHandler.bind(this));
        }
        else {
            this.setRippleStyles(false);
        }
    };
    MaterialRipple.prototype.downHandler_ = function (event) {
        'use strict';
        if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
            var rect = this.element_.getBoundingClientRect();
            this.boundHeight = rect.height;
            this.boundWidth = rect.width;
            this.rippleSize_ = Math.sqrt(rect.width * rect.width +
                rect.height * rect.height) * 2 + 2;
            this.rippleElement_.style.width = this.rippleSize_ + 'px';
            this.rippleElement_.style.height = this.rippleSize_ + 'px';
        }
        this.rippleElement_.classList.add(MaterialRipple.CssClasses.IS_VISIBLE);
        if (event.type === 'mousedown' && this.ignoringMouseDown_) {
            this.ignoringMouseDown_ = false;
        }
        else {
            if (event.type === 'touchstart') {
                this.ignoringMouseDown_ = true;
            }
            var frameCount = this.getFrameCount();
            if (frameCount > 0) {
                return;
            }
            this.setFrameCount(1);
            var bound = event.currentTarget.getBoundingClientRect();
            var x;
            var y;
            if (event.clientX === 0 && event.clientY === 0) {
                x = Math.round(bound.width / 2);
                y = Math.round(bound.height / 2);
            }
            else {
                var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
                var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
                x = Math.round(clientX - bound.left);
                y = Math.round(clientY - bound.top);
            }
            this.setRippleXY(x, y);
            this.setRippleStyles(true);
            window.requestAnimationFrame(this.animFrameHandler.bind(this));
        }
    };
    MaterialRipple.prototype.upHandler_ = function (event) {
        'use strict';
        if (event && event.detail !== 2) {
            this.rippleElement_.classList.remove(MaterialRipple.CssClasses.IS_VISIBLE);
        }
    };
    MaterialRipple.Constant_ = {
        INITIAL_SCALE: 'scale(0.0001, 0.0001)',
        INITIAL_SIZE: '1px',
        INITIAL_OPACITY: '0.4',
        FINAL_OPACITY: '0',
        FINAL_SCALE: ''
    };
    MaterialRipple.CssClasses = {
        RIPPLE_CONTAINER: 'md-ripple-container',
        RIPPLE_CENTER: 'md-ripple-center',
        RIPPLE: 'md-ripple',
        IS_ANIMATING: 'is-animating',
        IS_VISIBLE: 'is-visible'
    };
    return MaterialRipple;
})();
exports.MaterialRipple = MaterialRipple;
//# sourceMappingURL=ripple.js.map