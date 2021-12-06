const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const head = function (arr) {
  return arr[0];
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([]), 'Hello');
assertEqual(head([0]), 'Hello');
