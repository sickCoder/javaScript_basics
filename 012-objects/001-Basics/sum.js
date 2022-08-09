"use-strict";

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = getTotalSalaries(salaries);

alert(sum);

function getTotalSalaries(salaries) {
    let result = 0;

    for (let key in salaries) {
        result += salaries[key]; 
    }

    return result;
}