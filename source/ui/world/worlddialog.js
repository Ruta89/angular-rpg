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
var all_1 = require('../services/all');
var all_2 = require('../rpg/all');
var WorldDialog = (function () {
    function WorldDialog(game) {
        var _this = this;
        this.game = game;
        this.text = WorldDialog.DEFAULT_TEXT;
        this.title = WorldDialog.DEFAULT_TITLE;
        this.icon = '';
        this.active = false;
        game.world.scene.on('dialog:entered', function (feature) {
            _this.active = true;
            _this.icon = feature.icon;
            _this.text = feature.text;
            _this.title = feature.title;
        }, this);
        game.world.scene.on('dialog:exited', function () {
            _this.active = false;
            _this.text = WorldDialog.DEFAULT_TEXT;
            _this.title = WorldDialog.DEFAULT_TITLE;
            _this.icon = '';
        }, this);
    }
    WorldDialog.prototype.onDestroy = function () {
        this.game.world.scene.off('dialog:entered', null, this);
        this.game.world.scene.off('dialog:exited', null, this);
    };
    WorldDialog.DEFAULT_TEXT = 'Nothing to see here';
    WorldDialog.DEFAULT_TITLE = 'Untitled';
    WorldDialog = __decorate([
        angular2_1.Component({
            selector: 'world-dialog',
            properties: ['text', 'title', 'icon', 'active'],
            lifecycle: [angular2_1.onDestroy]
        }),
        angular2_1.View({
            templateUrl: 'source/ui/world/worlddialog.html',
            directives: [all_2.RPGSprite, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [all_1.RPGGame])
    ], WorldDialog);
    return WorldDialog;
})();
exports.WorldDialog = WorldDialog;
//# sourceMappingURL=worlddialog.js.map