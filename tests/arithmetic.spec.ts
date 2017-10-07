import {expect} from 'chai';
import 'mocha';
import parse from "../src/parser/parser";

describe("Polynomial Arithmetic", function(){

    it("Add", function(){
        let lhs = parse("3x^3 + 3x^2 - 4x + 5");
        let rhs = parse("x^3 - 2x^2 + x-4");
        let result = lhs.add(rhs);
        console.log("add: ", result);
    });
    it("Subtract", function(){
        let lhs = parse("x^3 - 2x^2 + x-4");
        let rhs = parse("x^3 - 2x^2 + x-4");
        let result = lhs.subtract(rhs);
        expect(result.size()).to.equal(0);
    });
    it("Multiply", function(){

    });
    it("Divide", function(){
        let lhs = parse("3x^2+5x+2");
        let rhs = parse("2x+1");
        let result = lhs.divide(rhs);
    });
    it("Evaluate", function(){
        let poly = parse("3x^2-2x+1");
        let result = poly.evaluate(2);
        expect(result).to.equal(9);
    });

});