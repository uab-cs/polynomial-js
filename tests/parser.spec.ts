import {expect} from 'chai';
import 'mocha';
import parse from "../src/parser/parser";

describe("Application Parser", function(){
    it("Shouldn't Explode", function(){
        console.log(parse("2x^3+7"));
    })
});