"use-strict";

function getAverageAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

alert( getAverageAge(users) ); // 28