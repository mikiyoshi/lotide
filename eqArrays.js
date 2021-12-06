const assertEqual = require('./eqArraysTest');
// FUNCTION IMPLEMENTATION
const eqArrays = function (arrOne, arrTwo) {
  // console.log(arrOne);
  // console.log(arrTwo);
  let result = 0;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      result += 0;
    } else {
      result += 1;
    }
  }
  if (result === 0) {
    return true;
  } else {
    return false;
  }
};
// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true); // => should PASS
