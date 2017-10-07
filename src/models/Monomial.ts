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

}