// FUNCTION IMPLEMENTATION
const countLetters = function (actual) {
  // console.log(actual);
  const list = {};
  for (let letter of actual) {
    // console.log(list[letter]);
    if (letter !== ' ') {
      list[letter] = (list[letter] || 0) + 1;
      // {list[letter]: (list[letter] || 0) + 1}
      // key list[letter]
      // value (list[letter] || 0) + 1
    }
  }
  console.log(list);
};

// TEST CODE
countLetters('LHL');
countLetters('lighthouse in the house');
