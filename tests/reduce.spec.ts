import parse from "../src/parser/parser";
import reduce from "../src/modules/reduce";
import {expect} from "chai";

describe("Polynomial Reducer", function(){
    it("Wires all modules together", function(){
        // let polynomial = parse("12x^3 - 41x^2 - 38x + 40");
        // let polynomial = parse("x^4 - 7x^3 + 17x^2 - 17x + 6");
        let polynomial = parse("2x^4 + x^3 + 3x^2 + 3x - 9");
        let output = reduce(polynomial, {
            // quadraticFormula: false
            quadraticFormula: true
        });
        // console.log(JSON.stringify(output, null, 2));
        // console.log(output);
    })
});