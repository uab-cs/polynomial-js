import Monomial from "./Monomial";
import * as _ from "lodash";
import Adapter from "./Adapter";

export default class Polynomial {

    monomials: Monomial[];

    constructor(monomials: Monomial[]){
        this.monomials = monomials;
    }

    /* getters */
    getMonomial(ind): Monomial{
        if(this.monomials[ind])
            return this.monomials[ind];
    }
    size(): number {
        return this.monomials.length;
    }
    getConstant(){
        return _.last(this.monomials).coefficient;
    }
    getLeadingCoefficient(): number{
        return this.getMonomial(0).coefficient;
    }
    toLatex(){
        return Adapter.toLatex(this);
    }

    /* arithmetic */
    add(polynomial: Polynomial): Polynomial{
        return new Adapter(this, polynomial).add();
    }
    subtract(polynomial: Polynomial): Polynomial{
        return new Adapter(this, polynomial).subtract();
    }
    multiply(polynomial: Polynomial): Polynomial{
        return new Adapter(this, polynomial).multiply();
    }
    divide(polynomial: Polynomial): Polynomial{
        return new Adapter(this, polynomial).divide();
    }
    evaluate(variable: number): number {
        return this.monomials.reduce((total: number, monomial: Monomial)=>{
            return total + (monomial.coefficient * ( Math.pow(variable, monomial.degree)));
        }, 0);
    }
    negate(){
        return new Polynomial(this.monomials.map((monomial)=>{
            return monomial.negate();
        }))
    }

    getIterator(){
        let _self: Polynomial = this;
        let cursor: number = 0;
        return {
            hasNext: function(): boolean{
                return cursor < _self.monomials.length;
            },
            next: function(): Monomial{
                let item = _self.monomials[cursor];
                cursor++;
                return item;
            },
            peek: function(): Monomial{
                return _self.monomials[cursor];
            }
        };
    }

}