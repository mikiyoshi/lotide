const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle.js');

assertArraysEqual(eqArrays(middle([1]), []), true);
assertArraysEqual(eqArrays(middle([1, 2]), []), true);
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
//
// const assert = require('chai').assert;
// const middle = require('../middle');

// describe('#middle', () => {
//   it("returns '5' for ['5']", () => {
//     assert.deepEqual(middle([5]), []);
//   });
// });
