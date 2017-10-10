"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Adapter_1 = require("./Adapter");
var Polynomial = /** @class */ (function () {
    function Polynomial(monomials) {
        this.monomials = monomials;
    }
    /**
     * READONLY
     * ==========================
     */
    Polynomial.prototype.getMonomial = function (ind) {
        this.sortMonomials();
        if (this.monomials[ind])
            return this.monomials[ind];
    };
    Polynomial.prototype.size = function () {
        return this.monomials.length;
    };
    Polynomial.prototype.getConstant = function () {
        this.sortMonomials();
        return _.last(this.monomials).coefficient;
    };
    Polynomial.prototype.highestDegree = function () {
        this.sortMonomials();
        return this.monomials[0].degree;
    };
    Polynomial.prototype.getLeadingCoefficient = function () {
        this.sortMonomials();
        return this.getMonomial(0).coefficient;
    };
    Polynomial.prototype.toLatex = function () {
        return Adapter_1.default.toLatex(this);
    };
    /**
     * ARITHMETIC
     * ==========================
     */
    Polynomial.prototype.add = function (polynomial) {
        return new Adapter_1.default(this, polynomial).add();
    };
    Polynomial.prototype.subtract = function (polynomial) {
        return new Adapter_1.default(this, polynomial).subtract();
    };
    Polynomial.prototype.multiply = function (polynomial) {
        return new Adapter_1.default(this, polynomial).multiply();
    };
    Polynomial.prototype.divide = function (polynomial) {
        return new Adapter_1.default(this, polynomial).divide();
    };
    Polynomial.prototype.evaluate = function (variable) {
        return this.monomials.reduce(function (total, monomial) {
            return total + (monomial.coefficient * (Math.pow(variable, monomial.degree)));
        }, 0);
    };
    Polynomial.prototype.negate = function () {
        return new Polynomial(this.monomials.map(function (monomial) {
            return monomial.negate();
        }));
    };
    /**
     * UTILITY
     * ==========================
     */
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
    Polynomial.prototype.equals = function (other) {
        if (this.size() !== other.size())
            return false;
        this.sortMonomials();
        other.sortMonomials();
        for (var i = 0; i < this.size(); i++) {
            var ours = this.getMonomial(i);
            var theirs = other.getMonomial(i);
            if (ours.coefficient !== theirs.coefficient)
                return false;
            if (ours.degree !== theirs.degree)
                return false;
        }
        return true;
    };
    Polynomial.prototype.sortMonomials = function () {
        this.monomials.sort(function (b, a) {
            return a.degree - b.degree;
        });
    };
    Polynomial.prototype.sortMonomialsAsc = function () {
        this.monomials.sort(function (a, b) {
            return a.degree - b.degree;
        });
    };
    return Polynomial;
}());
exports.default = Polynomial;
//# sourceMappingURL=Polynomial.js.map