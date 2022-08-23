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

recursivePrintList(list);
iterativePrintList(list);

function recursivePrintList(list) {
    alert(list.value);

    if (list.next) {
        recursivePrintList(list.next);
    }
}

function iterativePrintList(list) {
    let currentList = list;

    while (currentList) {
        alert(currentList.value);
        currentList = currentList.next;
    }
}