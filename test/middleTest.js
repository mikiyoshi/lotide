// const middle = require('./../middle.js');
// const assertArraysEqual = require('./../assertArraysEqual');

//
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle([5]), []);
  });
});
