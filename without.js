// FUNCTION IMPLEMENTATION
const without = function (arrOne, arrTwo) {
  // console.log(arrOne);
  // console.log(arrTwo);
  let result = [];
  for (let i = 0; i < arrOne.length; i++) {
    for (let x = 0; x < arrTwo.length; x++) {
      if (arrOne[i] === arrTwo[x]) {
        // console.log(arrOne[i]);
        if (result[i] !== arrOne[i] && arrOne[i] !== arrTwo[x]) {
          result.push(arrOne[i]);
        } else if (result[x] !== arrOne[i] && arrOne[x] !== arrTwo[x]) {
          result.push(arrTwo[x]);
        }
      }
    }
  }
  console.log(result);
};

const assertArraysEqual = function (actual, expected) {
  // console.log(actual);
  // console.log(expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const words = ['lighthouse'];
without(words, ['hello', 'world', 'lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
