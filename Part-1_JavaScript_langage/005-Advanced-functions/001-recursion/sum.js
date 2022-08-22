"use-strict";

function sumTo(n) {
    result = 0;

    for (let i = 1; i <= n; i++) result += i;

    return result;
}

function recursiveSumTo(n) {
    (n == 1) ? 1 : n + recursiveSumTo(n - 1);
}

function arithmeticSumTo(n) {
    return n * (n + 1) / 2;
}