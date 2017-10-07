export default class Monomial {

    readonly coefficient: number;
    readonly degree: number;

    constructor(coefficient: number, degree: number){
        this.coefficient = coefficient;
        this.degree = degree;
    }

    isPositive(){
        return this.coefficient >= 0;
    }

    /**
     * Evaluates this monomial against -x
     * Ex:
     *  3x^3 -> -3x^3
     *  3x^4 -> 3x^4
     * @returns {Monomial}
     */
    negateVariable(){
        let newCo = this.coefficient;
        if(this.degree % 2 !== 0) newCo *= -1;
        return new Monomial(newCo, this.degree);
    }
}