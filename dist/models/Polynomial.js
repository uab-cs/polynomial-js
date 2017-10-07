"use strict";
exports.__esModule = true;
var _ = require("lodash");
var Polynomial = /** @class */ (function () {
    function Polynomial(monomials) {
        this.monomials = monomials;
    }
    Polynomial.prototype.getMonomial = function (ind) {
        if (this.monomials[ind])
            return this.monomials[ind];
    };
    Polynomial.prototype.size = function () {
        return this.monomials.length;
    };
    Polynomial.prototype.getConstant = function () {
        return _.last(this.monomials).coefficient;
    };
    Polynomial.prototype.getLeadingCoefficient = function () {
        return this.getMonomial(0).coefficient;
    };
    Polynomial.prototype.getIterator = function () {
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