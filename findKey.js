// FUNCTION IMPLEMENTATION
const findKey = function (actual, expected) {
  // console.log(actual);
  // console.log(expected);
  const result = [];
  for (const key in actual) {
    // console.log(key);
    // console.log(actual[key]);
    // console.log(expected(actual[key]));
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
