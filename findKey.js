// FUNCTION IMPLEMENTATION
const findKey = function (actual, expected) {
  // console.log(actual); // Object
  // console.log(expected); // function
  const result = [];
  for (const key in actual) {
    // console.log(key); // key 'Blue Hill',
    // console.log(actual[key]); // value { stars: 1 },
    // console.log(expected(actual[key]));
    // expected(actual[key]) // (x) => x.stars === 2
    // (Akaleri) => Akaleri.stars === 2 // false
    // (noma) => noma.stars === 2 // true
    if (expected(actual[key])) {
      result.push(key);
    }
  }
  console.log(result);
};

// TEST CODE
findKey(
  {
    'Blue Hill': { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"
