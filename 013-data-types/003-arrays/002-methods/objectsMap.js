"use-strict";

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let userMapped = users.map(user => ({ //Use parenthesis before { to tell JavaScript it's an object, not a function
    fullName: user.name + " " + user.surname,
    id: user.id
    })); //Don't forget to close the parenthesis auround the object