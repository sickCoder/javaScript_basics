"use-stric";
/*
let sum = function(a, b){
    return a + b;
};
*/
/*
Can be replaced by an arraow function
It will take the arguments on the left of =>, evalute the expression on the 
right of => and return the result.
*/
let sum = (a, b) => a + b;

//If there is only one arguments, parenthesis can be removed.
let double = n => n * 2;

//If there is no arguments, parenthesis are empty.
let sayHelloWorld = () => alert('Hello world!');

//Arrow functions can be used like function expressions.
let age = prompt("What is your age?", 18);
let welcome = (age < 18)?
    () => alert('Hello!') :
    () => alert('Greetings!');
welcome();

//On multi lines
let sum2 = (a, b) => {
    let result = a + b;
    return result; //To have a return is an obligation
}; //Don't forget the semicolon