// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const tail = function (arr) {
  const x = [...arr];
  if (x.length === 1) {
    console.log(x);
  } else {
    x.shift();
    console.log(x);
  }
};
// const assertEqual = function (actual, expected) {
//   console.log(actual);
//   console.log(expected);
//   if (actual === expected) {
//     // console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
//     //Template Literals (Template Strings)
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     // console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== ' + expected);
//     //Template Literals (Template Strings)
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// TEST CODE
// const words = ['Yo Yo', 'Lighthouse', 'Labs'];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;
