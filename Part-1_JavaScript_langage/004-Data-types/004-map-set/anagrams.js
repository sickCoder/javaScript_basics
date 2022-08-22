"usee-strict";

function aclean(array) {
    let map = new Map();

    for(let word of array) {
        let sortedWord = word.toLowerCase().split("").sort().join("");
        map.set(sortedWord, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );