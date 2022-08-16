"use-strict";

function camelize(str) {
    let words = str.split('-');

    words.forEach(function(word, index) {
        if (index == 0) {
            return word;
        }
        return word[0].toUpperCase() + word.slice(1);
    });

    return words.join('');
}