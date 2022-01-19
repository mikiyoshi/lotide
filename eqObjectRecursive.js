const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
  }
  // console.assert(actual === expected,"🛑🛑🛑" + actual + " !== " + expected);
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (object1[key].constructor === Array) {
        if (object1[key].length !== object2[key].length) {
          return false;
        }
        for (let i = 0; i <= object1[key].length - 1; i++) {
          if (object1[key][i] !== object2[key][i]) {
            return false;
          }
        }
      } else if (
        object1[key].constructor === Object &&
        object2[key].constructor === Object
      ) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(
  eqObjects(
    {
      a: {
        p: [3, 5, 6],
        l: { 3: 6 },
        b: { hello: 8, anotherArray: [6, 7, 8] },
      },
    },
    {
      a: {
        p: [3, 5, 6],
        l: { 3: 6 },
        b: { hello: 8, anotherArray: [6, 7, 8] },
      },
    }
  ),
  true
);

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: '1', d: ['2', 3, 4] };
const cd3 = { c: '1', d: [2, 3, 4] };
const cd4 = { d: [2, 3, 4], c: '1' };
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd3, cd4), true);
