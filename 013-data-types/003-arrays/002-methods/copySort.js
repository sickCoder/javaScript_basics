"use-strict";

function copySorted(array) {
    return array.slice().sort((str1, str2) => str1.localeCompare(str2));
}