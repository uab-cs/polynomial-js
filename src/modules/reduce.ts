import Polynomial from "../models/Polynomial";
import ruleOfSigns from "./descarte";
import rationalZeros from "./zeros";
import syntheticDivide from "./syntheticDivision";
import quadraticFormula from "./quadraticFormula";
import * as math from "mathjs";
import Fraction = mathjs.Fraction;

/*

    1.  If solving an equation, put it in **standard form** with 0 on one side and **simplify**.

    2.  Know **how many roots** to expect.

    3.  If you’re down to a **linear or quadratic equation** (degree 1 or 2), solve by inspection or the quadratic formula.
        Then go to step 7.

    4.  **Find one rational factor** or root. This is the hard part, but there are lots of techniques to help you.
        If you can find a factor or root, continue with step 5 below; if you can’t, go to step 6.

    5.  **Divide by your factor**. This leaves you with a new **reduced polynomial** whose degree is 1 less.
        For the rest of the problem, you’ll work with the reduced polynomial and not the original. Continue at step 3.

    6.  **If you can’t find a factor or root**, turn to numerical methods.
        Then go to step 7.

    7.  If this was an equation to solve, **write down the roots**. If it was a polynomial to factor, **write it in factored form**, including any constant factors you took out in step 1.

*/
export default function reduce(polynomial: Polynomial, options = { quadraticFormula: false }): { steps: object[], roots: Fraction[] } {
    let steps: object[] = [];
    let roots: Fraction[] = [];

    steps.push({
        "module": "descarte",
        "title": "Rule of Signs",
        "desc": "Apply Descarte's 'Rule of Signs' so we know how many positive and negative zeros to expect",
        "data": ruleOfSigns(polynomial)
    });

    let loopUntil = (options.quadraticFormula)? 2 : 1;
    let curr: Polynomial = polynomial;
    while(curr.highestDegree() > loopUntil){

        let zeros = rationalZeros(curr);
        if(zeros.actual_zeros.length === 0){
            steps.push({
                "module": "no_zeros",
                "title": "No Zeros Found!"
            });
            break;
        }

        let nextZero = zeros.actual_zeros[0];
        // POTENTIAL LOSS OF PRECISION - HAVE SOMEONE VERIFY THIS
        let divisor = math.number(nextZero as number) as number;
        let division = syntheticDivide(curr, divisor);

        let result = division.polynomial;
        if(result.highestDegree() >= curr.highestDegree()){
            steps.push({
                "module": "no_divide",
                "title": "Could not divide polynomial!",
                "data": division
            });
            break;
        }
        curr = division.polynomial;

        steps.push({
            "module": "zeros",
            "title": "Rational Zeros Test",
            "data": zeros
        });
        steps.push({
            "module": "synthetic_division",
            "title": "Synthetic Division",
            "data": division
        });
        roots.push(nextZero);
    }


    if(options.quadraticFormula){
        if(polynomial.highestDegree() >= 2){
            return {steps, roots};
        }
        let quadratic = quadraticFormula(curr);

        steps.push({
            "module": "quadraticFormula",
            "title": "Quadratic Formula",
            "data": quadratic
        });

        steps.push({
            "module": "final",
            "title": "Result",
            "data": curr
        });

        roots.push(math.fraction(quadratic.plus));
        roots.push(math.fraction(quadratic.minus));
    }

    return { steps, roots };
}