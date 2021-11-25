const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = words.map((word) => word[0]);
// console.log(results1);

const map = function (array, callback) {
  // console.log(array);
  // console.log(callback);
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
};
const myCallback = (word) => word[0];
map(words, myCallback);
