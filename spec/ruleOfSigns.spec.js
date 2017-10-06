const Polynomial = require("polynomial");
import descartesRuleOfSigns from "../src/modules/ruleOfSigns";

describe("Rule of Signs Module", function(){
    it("Should Apply Descartes Rule of Signs", function(){
        let poly = new Polynomial("x^5-x^4+3x^3+9x^2-x+5");
        let output = descartesRuleOfSigns(poly);
        expect( output.max_positive ).toEqual(4);
        expect( output.max_negative ).toEqual(1);
    })
});