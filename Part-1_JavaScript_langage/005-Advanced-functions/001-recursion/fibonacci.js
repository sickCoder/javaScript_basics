"use-strict";

//recursive function, execution is slow
function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

//iterative function, faster execution
function fibonacci(n) {
    let a = 1,
        b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}