"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.maxPositiveZeros = maxPositiveZeros;
exports.test = test;

var _polynomial = require("polynomial");

var _polynomial2 = _interopRequireDefault(_polynomial);

var _mathjs = require("mathjs");

var _mathjs2 = _interopRequireDefault(_mathjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://www.purplemath.com/modules/drofsign.htm
function maxPositiveZeros(polynomial) {
    var max = 0;
    var coeff = polynomial.coeff;
    var last_co = void 0;
    for (var deg in coeff) {
        var current_co = coeff[deg];
        if (!last_co) {
            last_co = current_co;
            continue;
        }
        var isSame = last_co <= 0 && current_co <= 0 || last_co >= 0 && current_co >= 0;
        if (!isSame) max++;
        last_co = current_co;
    }
    return max;
}

function test() {
    console.log("hello!");
}