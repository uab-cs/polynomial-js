const Polynomial = require("polynomial");
import {getPotential} from "../src/modules/rationalRoots";

describe("Rational Zeros Module", function(){
    it("Should detect potential zeros", function(){
        let poly = new Polynomial("2x^4-11x^3-6x2+64x+32");
        let potentialZeros = getPotential(poly);
        console.log(potentialZeros);
    })
});