"use-strict";

function filterRange(array, min, max) {
    return array.filter(item => item >= min && item <= max);
}

function rangeInPlace(array, min, max) {

    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];

        if (currentValue < min || currentValue > max) {
            array.splice(i, 1);
            i--;
        }
    }
}