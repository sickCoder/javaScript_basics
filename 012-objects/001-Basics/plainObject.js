"use-strict";

//Object declaration
let user = {};

//Adding properties
user.name = "John";
//user.["name"] = "John"; //works too
user.surname = "Smith";

//Changing a property value
user.name = "Pete";

//Deleting a property
delete user.name;