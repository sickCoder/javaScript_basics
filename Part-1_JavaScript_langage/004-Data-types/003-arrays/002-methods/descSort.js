"use-strict";

let array = [5, 2, 1, -10, 8];

array.sort(function(a, b) {
    if ( a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
});
//array.sort((a, b) => b - a); // works too
alert(array);