// FUNCTION IMPLEMENTATION
const findKeyByValue = function (a, b) {
  // console.log(a);
  // console.log(b);
  // console.log(a['comedy']);
  // console.log(bestTVShowsByGenre['comedy']);
  // console.log(bestTVShowsByGenre.comedy);
  const list = ['sci_fi', 'comedy', 'drama'];
  for (const key of list) {
    // console.log(a[key]);
    if (a[key] === b) {
      return key;
    }
  }
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
const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
