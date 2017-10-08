import parse from "../src/parser/parser";
import reduce from "../src/modules/reduce";
import {expect} from "chai";

describe("Polynomial Reducer", function(){
    it("Wires all modules together", function(){
        let polynomial = parse("4x^3 + 15x  -36");
        let output = reduce(polynomial);
        // console.log(JSON.stringify(output, null, 2));
    })
});