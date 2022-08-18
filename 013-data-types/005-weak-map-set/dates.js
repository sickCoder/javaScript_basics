"use-strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let readDates = new WeakMap();

  readDates.set(messages[0], new Date(2022, 1, 1));