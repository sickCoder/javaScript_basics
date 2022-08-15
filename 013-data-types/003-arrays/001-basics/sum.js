"use-strict";

function sumInput() {

    let numbers = [];

    do {

        let value = prompt("Enter a number:", 0);
        
        if (!isFinite(value) || value == "" || value == null) {
            break;
        }

        numbers.push(+value);
    } while (true);
    
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

alert(sumInput());