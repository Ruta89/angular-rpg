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
var DamageComponent = (function (_super) {
    __extends(DamageComponent, _super);
    function DamageComponent() {
        _super.apply(this, arguments);
        this.started = false;
    }
    DamageComponent.prototype.syncComponent = function () {
        var _this = this;
        if (!_super.prototype.syncComponent.call(this)) {
            return false;
        }
        this.animation = this.host.findComponent(pow2.tile.components.AnimatedSpriteComponent);
        this.sprite = this.host.findComponent(pow2.tile.components.SpriteComponent);
        this.sound = this.host.findComponent(pow2.scene.components.SoundComponent);
        var ok = !!(this.animation && this.sprite);
        if (!this.started && ok) {
            this.started = true;
            this.animation.once('animation:done', function () {
                _this.trigger('damage:done', _this);
            });
        }
        return ok;
    };
    return DamageComponent;
})(pow2.scene.SceneComponent);
exports.DamageComponent = DamageComponent;
//# sourceMappingURL=damageComponent.js.map