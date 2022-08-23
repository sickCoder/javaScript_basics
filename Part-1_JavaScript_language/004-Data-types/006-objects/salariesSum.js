"use-strict";

function sumSalaries(salaries) {
    //let result = 0;
    return Object
           .values()
           .reduce((sum, salary) => sum + salary, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) );