(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./poly-grammar", "../models/Monomial", "../models/Polynomial"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var pegParser = require("./poly-grammar");
    var Monomial_1 = require("../models/Monomial");
    var Polynomial_1 = require("../models/Polynomial");
    function parse(exp) {
        exp = exp.replace(/\s/g, '');
        var output = pegParser.parse(exp);
        var monomials = output.map(function (obj) {
            return new Monomial_1["default"](obj.co, obj.deg);
        });
        return new Polynomial_1["default"](monomials);
    }
    exports["default"] = parse;
});
//# sourceMappingURL=parser.js.map