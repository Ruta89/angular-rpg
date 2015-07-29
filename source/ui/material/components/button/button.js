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
var include_1 = require('../../include');
var angular2_1 = require('angular2/angular2');
var ripple_1 = require('../ripple/ripple');
var MdButton = (function () {
    function MdButton(element) {
        this._ripple = new ripple_1.MaterialRipple(element.nativeElement);
    }
    MdButton.prototype.onClick = function (event) {
        if (include_1.isPresent(this.disabled) && this.disabled !== false) {
            event.preventDefault();
        }
    };
    MdButton.prototype.onChange = function () {
        this.tabIndex = this.disabled ? -1 : 0;
    };
    MdButton = __decorate([
        angular2_1.Component({
            selector: 'md-button',
            properties: ['disabled'],
            host: {
                '(click)': 'onClick($event)',
                '[tabIndex]': 'tabIndex',
                '[class.md-button]': 'true'
            },
            lifecycle: [angular2_1.onChange]
        }),
        angular2_1.View({
            template: '<content></content>'
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], MdButton);
    return MdButton;
})();
exports.MdButton = MdButton;
//# sourceMappingURL=button.js.map