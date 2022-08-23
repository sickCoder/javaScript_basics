"use-strict";

let calculator = new Calculator;

alert(calculator.calculate("3 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

alert(powerCalc.calculate("2 ** 3"));

function Calculator() {
    
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(operation) {
        let expression = operation.split(" ");
        let a = +expression[0];
        let operator = expression[1];
        let b = +expression[2];

        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[operator](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}