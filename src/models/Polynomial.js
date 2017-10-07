"use strict";
exports.__esModule = true;
var Polynomial = /** @class */ (function () {
    function Polynomial() {
    }
    Polynomial.prototype.mono = function (ind) {
        if (this.monomials[ind])
            return this.monomials[ind];
    };
    Polynomial.prototype.size = function () {
        return this.monomials.length;
    };
    Polynomial.prototype.cons = function () {
        return this.constant;
    };
    Polynomial.prototype.leadingCo = function () {
        return this.mono(0).co();
    };
    Polynomial.prototype.iterator = function () {
        var _self = this;
        var cursor = 0;
        return {
            hasNext: function () {
                return cursor < _self.monomials.length;
            },
            next: function () {
                var item = _self.monomials[cursor];
                cursor++;
                return item;
            },
            peek: function () {
                return _self.monomials[cursor];
            }
        };
    };
    return Polynomial;
}());
exports["default"] = Polynomial;
//# sourceMappingURL=Polynomial.js.map