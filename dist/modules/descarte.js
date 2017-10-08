(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function ruleOfSigns(polynomial) {
        return {
            "max_positive": maxPositiveZeros(polynomial),
            "max_negative": maxNegativeZeros(polynomial)
        };
    }
    exports["default"] = ruleOfSigns;
    function maxPositiveZeros(poly) {
        return countSignChanges(poly);
    }
    exports.maxPositiveZeros = maxPositiveZeros;
    function maxNegativeZeros(poly) {
        return countSignChanges(poly.negate());
    }
    exports.maxNegativeZeros = maxNegativeZeros;
    function countSignChanges(polynomial) {
        var changes = 0;
        var it = polynomial.getIterator();
        var last = it.next();
        while (it.hasNext()) {
            var current = it.next();
            if (last.isPositive() !== current.isPositive())
                changes++;
            last = current;
        }
        return changes;
    }
});
//# sourceMappingURL=descarte.js.map