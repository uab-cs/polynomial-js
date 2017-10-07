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
    /**
     * Evaluates this monomial against -x
     * Ex:
     *  3x^3 -> -3x^3
     *  3x^4 -> 3x^4
     * @returns {Monomial}
     */
    Monomial.prototype.negateVariable = function () {
        var newCo = this.coefficient;
        if (this.degree % 2 !== 0)
            newCo *= -1;
        return new Monomial(newCo, this.degree);
    };
    return Monomial;
}());
exports["default"] = Monomial;
//# sourceMappingURL=Monomial.js.map