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
var gameTileMap_1 = require('../../gameTileMap');
var CombatCameraComponent = (function (_super) {
    __extends(CombatCameraComponent, _super);
    function CombatCameraComponent() {
        _super.apply(this, arguments);
    }
    CombatCameraComponent.prototype.connectComponent = function () {
        return _super.prototype.connectComponent.call(this) && this.host instanceof gameTileMap_1.GameTileMap;
    };
    CombatCameraComponent.prototype.process = function (view) {
        if (!this.host) {
            _super.prototype.process.call(this, view);
            return;
        }
        var w = view.context.canvas.width;
        view.cameraScale = w > 1024 ? 6 : (w > 768 ? 4 : (w > 480 ? 3 : 2));
        view.camera = view.screenToWorld(new pow2.Rect(0, 0, view.context.canvas.width, view.context.canvas.height), view.cameraScale);
        view.camera.point.x = (this.host.bounds.extent.x / 2) - (view.camera.extent.x / 2);
    };
    return CombatCameraComponent;
})(pow2.scene.components.CameraComponent);
exports.CombatCameraComponent = CombatCameraComponent;
//# sourceMappingURL=combatCameraComponent.js.map