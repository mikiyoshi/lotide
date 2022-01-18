// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const eqArrays = function (arrOne, arrTwo) {
  // console.log(arrOne);
  // console.log(arrTwo);
  // console.log(!arrOne.length);
  // console.log(!arrTwo.length);
  // console.log(Array.isArray(arrTwo));
  // let result = 0;
  if (!arrOne.length || !arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      console.log(arrOne[i]);
      console.log(arrTwo[i]);
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
      return true;
    }
  }
  if (!arrOne.length === !arrTwo.length) {
    return true;
  }
  return false;
};

// const assertEqual = function (actual, expected) {
//   // console.log(actual);
//   // console.log(expected);
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should Fail
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true); // => should Fail
module.exports = eqArrays;
