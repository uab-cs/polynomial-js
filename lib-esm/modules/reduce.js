import ruleOfSigns from "./descarte";
import rationalZeros from "./zeros";
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
export default function reduce(polynomial) {
    var steps = [];
    var stepOne = {
        "module": "descarte",
        "title": "Rule of Signs",
        "desc": "Apply Descarte's 'Rule of Signs' so we know how many positive and negative zeros to expect",
        "data": ruleOfSigns(polynomial)
    };
    var stepTwo = {
        "module": "zeros",
        "title": "Rational Zeros Test",
        "data": rationalZeros(polynomial)
    };
    steps.push(stepOne, stepTwo);
    return steps;
}
//# sourceMappingURL=reduce.js.map