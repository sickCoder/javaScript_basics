"use-strict";

function unique(array) {
    let result = [];

    for (let item of array) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );