"use-strict";

let schedule = {};

alert( isEmpty(schedule) );

schedule["8.30"] = "get up";

alert( isEmpty(schedule) );

function isEmpty(object) {
    
    for (let key in object) {
            return false;
    }

    return true;
}