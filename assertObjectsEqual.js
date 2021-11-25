const eqObjects = function (object1, object2) {
  // console.log(object1);
  // console.log(object2);
  let inspect = require('util').inspect;
  const keyList1 = Object.keys(object1);
  const keyList2 = Object.keys(object2);
  // console.log(keyList1);
  if (keyList1.length === keyList2.length) {
    // console.log(keyList1);
    for (let x of keyList1) {
      // console.log(object1[x]);
      const arr = Array.isArray(object1[x]);
      // console.log(arr);
      const arrOne = object1[x];
      const arrTwo = object2[x];
      if (arr) {
        // console.log(arr);
        // console.log(arrOne);
        // console.log(arrTwo);
        // console.log(arrOne.length);
        // console.log(arrTwo.length);
        if (arrOne.length === arrTwo.length) {
          // console.log('yes');
          let result = 0;
          for (let i = 0; i < arrOne.length; i++) {
            // console.log(arrOne[i]);
            if (arrOne[i] === arrTwo[i]) {
              result += 0;
            } else {
              result += 1;
            }
          }
          if (result === 0) {
            console.log(
              `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(
                object2
              )}`
            );
            return true;
          } else {
            console.log(
              `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(
                object2
              )}`
            );
            return false;
          }
        } else {
          console.log(
            `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(
              object2
            )}`
          );
          return false;
        }
      } else {
        // console.log('no');
        if (object1[x] !== object2[x]) {
          return false;
        }
      }
    }
  }
  console.log(
    `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
  );
  return true;
};

const assertEqual = function (actual, expected) {
  console.log(actual);
  console.log(expected);
  if (actual === expected) {
    // console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
    //Template Literals (Template Strings)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== ' + expected);
    //Template Literals (Template Strings)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
