"use-strict";

//Function declaration
function name(params) {
    
}

//Function expression
let function1 = function (params) {

}; //Do not forget the semicolon et the end of the expression

/* 
A function is a particular value in JavaScript.
The function declaration below creates the function itself and
also creates a variable sayHi that contains the value of the function.
*/
function sayHi() {
    alert('Hello!');
}
/*It prints the source code of the function sayHi()
but do not executes the function because there is no
parenthesis after sayHi.
*/
alert(sayHi);

//The function value can be copied into a variable
let sayHiCopied = sayHi;
//Executing sayHiCopied
sayHiCopied();

//We can also do that to get the same result
let sayHiExpression = function () {
    alert('Hello!');
};
sayHiCopied = sayHiExpression;