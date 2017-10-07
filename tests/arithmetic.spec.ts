import {expect} from 'chai';
import 'mocha';
import parse from "../src/parser/parser";

describe("Polynomial Arithmetic", function(){

    it("Add", function(){
        // (3x^2+4x-2) + (-7x^2-10x+17)
        let lhs = parse("3x^2+4x-2");
        let rhs = parse("-7x^2-10x+17");
        let result = lhs.add(rhs);
    });
    it("Subtract", function(){

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