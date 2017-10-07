"use strict";
exports.__esModule = true;
function rationalZeros(polynomial) {
    var potential = potentialZeros(polynomial);
    var actual = actualZeros(potential, polynomial);
    return {
        "potential_zeros": potential,
        "actual_zeros": actual
    };
}
exports["default"] = rationalZeros;
function potentialZeros(polynomial) {
    // factors of constant / leading coefficient
    var cons = factors(polynomial.getConstant());
    var leading = factors(polynomial.getLeadingCoefficient());
    var resultSet = new Set();
    cons.forEach(function (numCons) {
        leading.forEach(function (numLead) {
            var potZero = numCons / numLead;
            resultSet.add(potZero);
            resultSet.add(potZero * -1);
        });
    });
    return resultSet;
}
exports.potentialZeros = potentialZeros;
function actualZeros(potential, polynomial) {
    var actual = new Set();
    potential.forEach(function (number) {
        var res = polynomial.evaluate(number);
        if (res === 0)
            actual.add(number);
    });
    return actual;
}
exports.actualZeros = actualZeros;
function factors(n) {
    var num_factors = [], i;
    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
            num_factors.push(i);
            if (n / i !== i)
                num_factors.push(n / i);
        }
    num_factors.sort(function (x, y) {
        return x - y;
    });
    return num_factors;
}
//# sourceMappingURL=zeros.js.map