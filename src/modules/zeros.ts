import Polynomial from "../models/Polynomial";

export default function rationalZeros(polynomial: Polynomial) {
    let potential = potentialZeros(polynomial);
    let actual = actualZeros(potential, polynomial);
    return {
        "potential_zeros": potential,
        "actual_zeros": actual
    }
}

export function potentialZeros(polynomial: Polynomial) {
    // factors of constant / leading coefficient
    let cons = factors(polynomial.getConstant());
    let leading = factors(polynomial.getLeadingCoefficient());
    let resultSet = new Set<number>();
    cons.forEach((numCons) => {
        leading.forEach((numLead) => {
            let potZero = numCons / numLead;
            resultSet.add(potZero);
            resultSet.add(potZero * -1);
        });
    });
    return resultSet;
}

export function actualZeros(potential: Set<number>, polynomial: Polynomial) {
    let actual = new Set<number>();
    potential.forEach((number) => {
        let res = polynomial.evaluate(number);
        if (res === 0) actual.add(number);
    });
    return actual;
}

function factors(n) {
    let num_factors = [], i;
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