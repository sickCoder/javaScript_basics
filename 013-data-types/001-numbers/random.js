"use-strict";

function random(min, max) {
    return min + Math.random() * (max - min);
}

for (let i = 0; i < 3; i++) 
    alert(random(1, 5));