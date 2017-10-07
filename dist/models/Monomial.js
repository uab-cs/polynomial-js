"use strict";
exports.__esModule = true;
var Monomial = /** @class */ (function () {
    function Monomial(coefficient, degree) {
        this.coefficient = coefficient;
        this.degree = degree;
    }
    Monomial.prototype.isPositive = function () {
        return this.coefficient >= 0;
    };
    return Monomial;
}());
exports["default"] = Monomial;
//# sourceMappingURL=Monomial.js.map