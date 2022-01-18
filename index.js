// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  countLetters: countLetters,
  countOnly: countOnly,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
};

// node REPL test
// in Terminal
// vagrant [lotide]> node
// > const _ = require('./index')
// undefined
// > _
// { head: [Function: head],
//   tail: [Function: tail],
//   middle: [Function: middle] }
// > .exit
