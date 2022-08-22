"use-strict";

let user = {
    name: "John Smith",
    age: 35
};

let user2 = JSON.stringify(user);
user2 = JSON.parse(user2);

//let user1 = JSON.parse(JSON.stringify(user)); //works too