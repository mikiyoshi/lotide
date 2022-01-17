const eqObjects = function (object1, object2) {
  // console.log(object1);
  // console.log(object2);
  const keyList1 = Object.keys(object1);
  const keyList2 = Object.keys(object2);
  if (keyList1.length === keyList2.length) {
    // console.log(keyList1.length);
    // console.log(keyList2.length);
    for (let key in object1) {
      for (let key2 in object2) {
        // console.log(key2);
        // console.log(object2[key2]);
        if (object1[key].constructor === Array) {
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
                // let result = 0;
                for (let i = 0; i < arrOne.length; i++) {
                  // console.log(arrOne[i]);
                  if (arrOne[i] === arrTwo[i]) {
                    return true;
                  }
                  return false;
                  //    else {
                  //     result += 1;
                  //   }
                  // }
                  // if (result === 0) {
                  //   return true;
                  // } else {
                  //   return false;
                }
              }
              return false;
              //  else {
              //   return false;
              // }
            }

            // console.log('no');
            if (object1[x] !== object2[x]) {
              return false;
            }
          }
        }
        if (
          object1[key].constructor === Object &&
          object2[key2].constructor === Object
        ) {
          if (!eqObjects(object1[key], object2[key2])) {
            // console.log(object1[key]);
            // console.log(object2[key]);
            return false;
          }
        }
        // console.log(object2);
        // console.log(key);
        // console.log(object1[key]);
        // console.log(object2[key]);
        // console.log(`obj2: ${object2[key]}`);
        if (object1[key] !== object2[key2]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
  //  else {
  //   return false;
  // }
};

const assertEqual = function (actual, expected) {
  // console.log(actual);
  // console.log(expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
