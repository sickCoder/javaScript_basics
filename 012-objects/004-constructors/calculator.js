"use-strict";

function Calculator() {
    this.read = function() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.multiply = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("sum = " + calculator.sum());
alert("mul = " + calculator.multiply());