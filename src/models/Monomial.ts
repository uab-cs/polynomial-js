export default class Monomial {

    readonly coefficient: number;
    readonly degree: number;

    constructor(coefficient, degree){
        this.coefficient = coefficient;
        this.degree = degree;
    }

    co(){
        return this.coefficient;
    }
    deg(){
        return this.degree;
    }

    isPositive(){
        return this.coefficient >= 0;
    }

}