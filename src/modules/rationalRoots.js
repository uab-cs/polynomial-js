import math from "mathjs";

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
    });  // numeric sort
    return num_factors;
}

export function getPotential(polynomial) {
    let leadingFactors = factors(polynomial.lc());
    let constFactors = factors(polynomial.coeff['0'] || 0);

    let potential = [];
    constFactors.forEach((cons)=>{
        leadingFactors.forEach((leading)=>{
            potential.push(math.fraction(cons, leading));
        })
    });
    return potential;
}

/**
 *
 */
export function testPotential(polynomial, potential_zeros) {

}

export default function rationalZeroTest(polynomial) {
    let potential = getPotential(polynomial);
    let actual = testPotential(polynomial, potential);
    return {
        "potential_zeros": potential,
        "actual_zeros": actual
    }
}