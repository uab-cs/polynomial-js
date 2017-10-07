import {expect} from 'chai';
import 'mocha';
import * as parser from "../src/parser/poly-grammar";

describe("PEG.js Parser", function(){
    it("Shouldn't Explode", function(){
        expect(function(){
            let output = parser.parse("2x^2+7x-32");
            console.log(output);
            expect(output[1].co).to.equal(7);
        }).not.to.throw();
    })
});