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
var RPGNotification = (function () {
    function RPGNotification(notify, element) {
        this.notify = notify;
        this.element = element;
        notify.container = element.nativeElement;
    }
    RPGNotification = __decorate([
        angular2_1.Component({
            selector: 'rpg-notification',
            properties: ['notify'],
        }),
        angular2_1.View({
            template: "<span class=\"message\" [inner-text]=\"notify.message\"></span>",
        }), 
        __metadata('design:paramtypes', [all_1.Notify, angular2_1.ElementRef])
    ], RPGNotification);
    return RPGNotification;
})();
exports.RPGNotification = RPGNotification;
//# sourceMappingURL=rpgnotification.js.map