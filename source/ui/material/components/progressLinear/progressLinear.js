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
require('../../include');
var angular2_1 = require('angular2/angular2');
var MdProgressLinear = (function () {
    function MdProgressLinear(el) {
        this.mdMode = 'determinate';
        this._barOneStyle = el.nativeElement.querySelector('.md-bar1').style;
        this._barTwoStyle = el.nativeElement.querySelector('.md-bar2').style;
        var container = el.nativeElement.querySelector('.md-container');
        this.mdBufferValue = this.value = 0;
        container.classList.add('md-ready');
    }
    Object.defineProperty(MdProgressLinear.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = clamp(val);
            if (this.mdMode == 'query') {
                return;
            }
            this._barOneStyle['transform'] = this._barOneStyle['-webkit-transform'] = transforms[this._value];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressLinear.prototype, "mdBufferValue", {
        get: function () {
            return this._mdBufferValue;
        },
        set: function (val) {
            this._mdBufferValue = clamp(val);
            this._barTwoStyle['transform'] = this._barTwoStyle['-webkit-transform'] = transforms[this._mdBufferValue];
        },
        enumerable: true,
        configurable: true
    });
    MdProgressLinear = __decorate([
        angular2_1.Component({
            selector: 'md-progress-linear',
            properties: ['mdMode', 'mdBufferValue', 'value'],
            host: {
                'role': 'progressbar',
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                '[attr.aria-valuenow]': 'value'
            }
        }),
        angular2_1.View({
            template: "\n    <div class=\"md-container\">\n      <div class=\"md-dashed\"></div>\n      <div class=\"md-bar md-bar1\"></div>\n      <div class=\"md-bar md-bar2\"></div>\n    </div>\n   "
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], MdProgressLinear);
    return MdProgressLinear;
})();
exports.MdProgressLinear = MdProgressLinear;
function clamp(value) {
    if (value > 100) {
        return 100;
    }
    if (value < 0) {
        return 0;
    }
    return Math.ceil(value || 0);
}
var transforms = (function () {
    var values = new Array(101);
    for (var i = 0; i < 101; i++) {
        values[i] = makeTransform(i);
    }
    return values;
    function makeTransform(value) {
        var scale = value / 100;
        var translateX = (value - 100) / 2;
        return 'translateX(' + translateX.toString() + '%) scale(' + scale.toString() + ', 1)';
    }
})();
//# sourceMappingURL=progressLinear.js.map