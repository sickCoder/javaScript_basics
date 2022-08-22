"use-strict";

//Primitive type copy
let message = "Hello!";
let sentence = message;
/*
sentence is a copy of message in the memory.
Modifications on message will not affect sentence, vice versa.
*/

//Object reference
let user = {
    name: "John"
};
let admin = user;
/*
Admin and user are references in the memory 
to the object.
Modifications of admin property will affect user, vice versa.
*/

//Objects comparison
let a = {};
let b = a;
a == b; //true, a and b refer to the same object in the memory.

b = {};
a == b; //false, b now refers to a different object in the memory.