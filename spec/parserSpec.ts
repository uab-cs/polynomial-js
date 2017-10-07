// noinspection TypeScriptCheckImport
import * as parser from "../src/parser/poly-grammar";

describe("PegJS Parser Test", function(){

    it("Should parse good input", function(){
        expect(function(){
            let output = parser.parse("3x^3+7x^2+8x+32");
            console.log(output);
        }).not.toThrow();
    });

    it("Should throw an exception on bad input", function(){
        expect(function(){
            parser.parse("boob");
        }).toThrow();
    });

});