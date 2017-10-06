import Polynomial from "polynomial";
import {maxPositiveZeros} from "../dist/reduce";

describe("Polynomial Framework", function(){
    it("Should not explode", function(){
        var p = new Polynomial("5-3x^3-6x^5");
        console.log(maxPositiveZeros(p));
    })
});