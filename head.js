const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const head = function (arr) {
  return arr[0];
};

// replace by top
// const assertEqual = function (actual, expected) {
// console.log(actual);
// if (actual === expected) {
//   // console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
//   //Template Literals (Template Strings)
//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// } else {
//   // console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== ' + expected);
//   //Template Literals (Template Strings)
//   console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// }
// };

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([]), 'Hello');
assertEqual(head([0]), 'Hello');
module.exports = head;
