"use-strict";

function checkAge(age) {
    return age > 18 ? true : confirm("Did parents allow you?");
}
/*
//Same thing written diffently
function checkAge(age) {
    return age > 18 || confirm("Did ârents allow you?");
}
*/
//Suppose it will be a number
let age = prompt("How old are you?",0);
checkAge(age) ? alert("Access granted!") : alert("Acess Denied!");