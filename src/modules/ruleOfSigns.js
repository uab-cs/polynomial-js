function checkSign(coeff, deg){
    return coeff[deg] >= 0;
}

function swapCount(polynomial){
    let coeff = polynomial.coeff;
    let swap_count = 0;
    let last = null;
    for(let deg in coeff){
        if(coeff.hasOwnProperty(deg)){
            let sign = checkSign(coeff, deg);
            if(last === null) last = sign;
            if(last !== sign) swap_count++;
            last = sign;
        }
    }
    return swap_count;
}

function negate(polynomial){
    for(let deg in polynomial.coeff){
        if(parseInt(deg) % 2 !== 0){
            polynomial.coeff[deg] *= -1;
        }
    }
    return polynomial;
}

export function maxPositiveZeros(polynomial){
    return swapCount(polynomial);
}

export function maxNegativeZeros(polynomial){
    return swapCount(negate(polynomial));
}

export default function descartesRuleOfSigns(polynomial){
    let pos = maxPositiveZeros(polynomial);
    let neg = maxNegativeZeros(polynomial);
    return {
        "max_positive": pos,
        "max_negative": neg
    }
}