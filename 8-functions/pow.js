"use-strict";

function pow(x, n){
    let result = x;
    for(let i = 1; i < n; i++)
        result *= x;
    return result;
}

//Suppose it will be numbers
let x = prompt("x?", "");
let n = prompt("n?", "");

if(n < 0 || n == null)
    alert(`Power ${n} is not supported, use a positive value`);
else
    alert(pow(x, n));