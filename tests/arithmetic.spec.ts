import {expect} from 'chai';
import 'mocha';
import * as _ from "lodash";
import parse from "../src/parser/parser";
import Polynomial from "../src/models/Polynomial";

describe("Polynomial Arithmetic", function(){

    let polynomial: Polynomial;

    beforeEach(function(){
        polynomial = parse("2x^3+10");
    });

    it("Add", function(){
        // (3x^2+4x-2) + (-7x^2-10x+17)
        let lhs = parse("3x^2+4x-2");
        let rhs = parse("-7x^2-10x+17");
        let result = lhs.add(rhs);
        console.log("add: ", result);
    });
    it("Subtract", function(){

    });
    it("Multiply", function(){

    });
    it("Divide", function(){
        let lhs = parse("3x^2+5x+2");
        let rhs = parse("2x+1");
        let result = lhs.divide(rhs);
        console.log("divide", result);
    });
});