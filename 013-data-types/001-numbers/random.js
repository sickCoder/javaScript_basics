"use-strict";

function random(min, max) {
    return min + Math.random() * (max - min);
}

for (let i = 0; i < 3; i++) 
    alert(random(1, 5));

function randomInteger(min, max) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
}

for (let i = 0; i < 3; i++)
    alert(randomInteger(1, 5));