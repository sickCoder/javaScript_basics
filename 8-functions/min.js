"use-strict";

function min(a, b) {
    if (a <= b) 
        return a;
    else if (b < a) 
        return b;
}

//Supposing it will be numbers
let a = prompt("Enter a number", 0);
let b = prompt("Enter another number", 0);
alert(min(a,b));