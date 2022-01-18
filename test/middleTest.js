const assert = require('chai').assert;
// const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe('#middle', () => {
  it('should return [] for []', () => {
    const expectedOutput = [];
    const actualOutput = middle([1]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [] for middle([1, 2])', () => {
    const expectedOutput = [];
    const actualOutput = middle([1, 2]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [2] for middle([1, 2, 3])', () => {
    const expectedOutput = [2];
    const actualOutput = middle([1, 2, 3]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [3] for middle([1, 2, 3, 4, 5])', () => {
    const expectedOutput = [3];
    const actualOutput = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [2,3] for middle([1, 2, 3, 4,])', () => {
    const expectedOutput = [2, 3];
    const actualOutput = middle([1, 2, 3, 4]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [3,4] for middle([1, 2, 3, 4, 5, 6])', () => {
    const expectedOutput = [3, 4];
    const actualOutput = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(actualOutput, expectedOutput);
  });
});
//
// const assert = require('chai').assert;
// const middle = require('../middle');

// describe('#middle', () => {
//   it("returns '5' for ['5']", () => {
//     assert.deepEqual(middle([5]), []);
//   });
// });
