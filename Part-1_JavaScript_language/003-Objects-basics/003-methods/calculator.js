"use-strict";

let calculator = {
    read() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    },
    sum() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.multiply() );