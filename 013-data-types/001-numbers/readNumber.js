"use-strict";

function readNumber() {
    let number;

    do {
        number = prompt("Enter a number", 0);
    } while (isFinite(number));

    if (num === null || num === "") {
        return null;
    }

    return +number;
}

alert(`Read: ${readNumber()}`);