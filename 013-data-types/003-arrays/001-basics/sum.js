"use-strict";

function sumInput() {
    let numbers = [];
    let value = 0;

    do {
        
        value = +prompt("Enter a number:", 0);
        
        if (!isFinite(number) || value == "" || value == null) {
            break;
        }

        numbers.push(value);
    } while (true);
    
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

alert(sumInput());