import {expect} from 'chai';
import 'mocha';
import parse from "../../src/parser/parser";
import syntheticDivide from "../../src/modules/syntheticDivision";

describe("Synthetic Division", function(){
    it("Should perform synthetic division", function(){
        let polynomial = parse("3x^3 + 5x - 1");
        let root = -1;
        let result = syntheticDivide(polynomial, root);
        console.log(result);
    })
});