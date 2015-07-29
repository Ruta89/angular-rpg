var Visibility = (function () {
    function Visibility() {
        var _this = this;
        this.supported = document.hasOwnProperty('hidden');
        this._changeVisibility = function () { return _this.onChange(); };
        if (this.supported) {
            document.addEventListener('visibilityChange', this._changeVisibility);
        }
    }
    Visibility.prototype.destroy = function () {
        if (this.supported) {
            document.removeEventListener('visibilityChange', this._changeVisibility);
        }
    };
    Visibility.prototype.onChange = function () {
        switch (document.visibilityState) {
            case 'visible':
                break;
            case 'hidden':
                break;
            case 'prerender':
                break;
            case 'unloaded':
                break;
        }
    };
    return Visibility;
})();
exports.Visibility = Visibility;
//# sourceMappingURL=visibility.js.map