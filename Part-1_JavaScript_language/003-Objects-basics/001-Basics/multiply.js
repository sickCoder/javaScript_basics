"use-strict";

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

//Function that's only doubles the numeric properties
function multiplyNumeric(object) {
    
    for (let key in object){

        if (typeof object[key] == 'number') {
            object[key] *= 2;
        }
    }
}