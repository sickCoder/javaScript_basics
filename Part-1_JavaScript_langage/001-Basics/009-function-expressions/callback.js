"use-strict";

/* 
question = question text
yes = function to execute in case yes
no = function to execute in case no
*/
function ask(question, yes, no) {
    if(confirm(question))
        yes();
    else
        no();
}

function showOk() {
    alert('You agreed.');
}

function showCancel() {
    alert('Execution canceled.');
}
/*
Using showOk and showCancel as callbacks functions.
One of them will be called later in the function ask execution.
*/
ask("Do you agree?", showOk, showCancel);

/*
We could also call ask with anonymous functions.
These anonymous functions cannot be accessed outside
of ask becouse they are not into variables.
However in this particular case, this is exactly what we need.
*/
ask(
    "Do you agree?",
    function () { alert('You agreed.'); },
    function () { alert('Execution canceled'); }
);