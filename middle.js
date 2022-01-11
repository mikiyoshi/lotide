const eqArrays = function (arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function (array) {
  const middleIndex = Math.floor(array.length / 2);
  // Math.floor() 関数は与えられた数値以下の最大の整数を返します、小数点以下切り捨て
  // Math.floor( 45.95); //  45
  // Math.floor( 45.05); //  45
  // Math.floor(  4   ); //   4
  // Math.floor(-45.05); // -46
  // Math.floor(-45.95); // -46
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[middleIndex]];
  } else if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
module.exports = middle;
