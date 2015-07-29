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
var gameFeatureComponent_1 = require('./gameFeatureComponent');
var gameFeatureObject_1 = require('../objects/gameFeatureObject');
var PlayerTouchComponent = (function (_super) {
    __extends(PlayerTouchComponent, _super);
    function PlayerTouchComponent() {
        _super.apply(this, arguments);
        this.collider = null;
        this.player = null;
        this.touch = null;
        this.touchedComponent = null;
    }
    PlayerTouchComponent.prototype.syncComponent = function () {
        _super.prototype.syncComponent.call(this);
        this.player = this.host.findComponent(pow2.scene.components.PlayerComponent);
        this.collider = this.host.findComponent(pow2.scene.components.CollisionComponent);
        return !!(this.player && this.collider);
    };
    PlayerTouchComponent.prototype.tick = function (elapsed) {
        _super.prototype.tick.call(this, elapsed);
        if (!this.player || !this.collider) {
            return;
        }
        var results = [];
        var newTouch = this.collider.collide(this.host.point.x + this.player.heading.x, this.host.point.y + this.player.heading.y, gameFeatureObject_1.GameFeatureObject, results);
        var touched = _.find(results, function (r) {
            return !!r.findComponent(gameFeatureComponent_1.GameFeatureComponent);
        });
        if (!newTouch || !touched) {
            if (this.touchedComponent) {
                this.touchedComponent.exit(this.host);
                this.touchedComponent = null;
            }
            this.touch = null;
        }
        else {
            var touchComponent = touched.findComponent(gameFeatureComponent_1.GameFeatureComponent);
            var previousTouch = this.touchedComponent ? this.touchedComponent.id : null;
            if (this.touchedComponent && this.touchedComponent.id !== touchComponent.id) {
                this.touchedComponent.exit(this.host);
                this.touchedComponent = null;
            }
            this.touchedComponent = touchComponent;
            if (touchComponent.id !== previousTouch) {
                this.touchedComponent.enter(this.host);
            }
            this.touch = touched;
        }
    };
    return PlayerTouchComponent;
})(pow2.scene.components.TickedComponent);
exports.PlayerTouchComponent = PlayerTouchComponent;
//# sourceMappingURL=playerTouchComponent.js.map