import Polynomial from "./Polynomial";
import * as PolyJS from "polynomial";
import Monomial from "./Monomial";

export default class Adapter {

    lhs;
    rhs;

    constructor(lhs: Polynomial, rhs: Polynomial){
        this.lhs = Adapter.toPolyJS(lhs);
        this.rhs = Adapter.toPolyJS(rhs);
    }

    add(){
        return this.next(this.lhs.add(this.rhs));
    }

    subtract(){
        return this.next(this.lhs.sub(this.rhs));
    }

    multiply(){
        return this.next(this.lhs.mul(this.rhs));
    }

    divide(){
        return this.next(this.lhs.div(this.rhs));
    }

    next(polyJSOutput){
        return Adapter.fromPolyJS(polyJSOutput);
    }

    static toPolyJS(polynomial: Polynomial){
        let data = {};
        polynomial.monomials.forEach((monomial) => {
            data[monomial.degree+""] = monomial.coefficient
        });
        return new PolyJS(data);
    }
    static fromPolyJS(polynomial): Polynomial {
        let _monos = polynomial.coeff;
        let monos: Monomial[] = [];
        for(let key in _monos){
            if(_monos.hasOwnProperty(key))
                monos.push(new Monomial(_monos[key], parseInt(key)));
        }
        return new Polynomial(monos);
    }
}