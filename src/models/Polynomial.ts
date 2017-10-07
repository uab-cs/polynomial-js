import Monomial from "./Monomial";

export default class Polynomial {

    monomials: Monomial[];
    constant: number;

    constructor(monomials: Monomial[], constant: number){
        this.monomials = monomials;
        this.constant = constant;
    }

    mono(ind): Monomial{
        if(this.monomials[ind]) return this.monomials[ind];
    }
    size(): number {
        return this.monomials.length;
    }
    cons(){
        return this.constant;
    }
    leadingCo(): number{
        return this.mono(0).co();
    }

    iterator(){
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