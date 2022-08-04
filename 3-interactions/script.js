"user-strict";

//Pops a modal window with an entry field
let name = prompt("What is your name?", "");
//Pops a modal window with a message
alert(name);

//Works too, but harder to read and understand
//alert(prompt("What is your name?", ""));
/*
Pops a modal window with OK and Cancel buttons
OK returns true, Cancel or escape returns false
*/
let isBoss = confirm("Are you the boss?");
alert(isBoss);