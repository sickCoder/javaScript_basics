"use-strict";

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

recursivePrintReverseList(list);
iterativePrintReverseList(list);

function recursivePrintReverseList(list) {
    
    if (list.next) {
        recursivePrintReverseList(list.next);
    }

    alert(list.value);
}

function iterativePrintReverseList(list) {
    let currentList = list;
    let values = [];

    while (currentList.next) {
        values.push(currentList.value);
        currentList = currentList.next;
    }

    for (let i = values.length - 1; i >= 0; i--) {
        alert(values[i]);
    }
}