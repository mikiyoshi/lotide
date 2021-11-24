const letterPositions = function (sentence) {
  // console.log(sentence);
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
    // results[sentence[i]] = i;
  }
  console.log(results);
  return results;
};

// const assertArraysEqual = function (actual) {
// };
letterPositions('hello');
// assertArraysEqual(letterPositions('hello').e, [1]);
