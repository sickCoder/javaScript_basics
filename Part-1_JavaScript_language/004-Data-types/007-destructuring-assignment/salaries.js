"use-strict";

function topSalary(salaries) {
    let result = null;
    let topSalary = 0;

    for (let [name, salary] of Object.entries(salaries)) {
        
        if (salary < topSalary) {
            continue;    
        }
        
        topSalary = salary;
        result = name;
    }
    return result;
}