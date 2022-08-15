"use-strict";

function getMaxSubSum(array) {
    let result = 0;
    let currentSum = 0;
    
    for (let number of array) {
        currentSum += number;
        result = Math.max(result, currentSum);

        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return result;
}