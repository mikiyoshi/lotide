// FUNCTION IMPLEMENTATION
// const eqArrays = (a, b) =>
//   a.length === b.length && a.every((v, i) => v === b[i]);

const eqArrays = require('./eqArrays');

// const eqArrays = function (arrOne, arrTwo) {
//   // console.log(arrOne);
//   // console.log(arrTwo);
//   for (let i = 0; i < arrOne.length; i++) {
//     if (arrOne[i] !== arrTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const assertArraysEqual = function (actual, expected) {
  console.log(actual);
  console.log(expected);
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should Fail
assertArraysEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => should PASS
assertArraysEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => should Fail

module.exports = assertArraysEqual;
