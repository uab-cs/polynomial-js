import Polynomial from "polynomial";
import math from "mathjs";

// http://www.purplemath.com/modules/drofsign.htm
export function maxPositiveZeros(polynomial){
    let max = 0;
    let coeff = polynomial.coeff;
    let last_co;
    for(let deg in coeff){
        let current_co = coeff[deg];
        if(!last_co){
            last_co = current_co;
            continue;
        }
        let isSame = ((last_co <= 0 && current_co <= 0) || (last_co >= 0 && current_co >= 0));
        if(!isSame) max++;
        last_co = current_co;
    }
    return max;
}

export function test(){
    console.log("hello!");
}