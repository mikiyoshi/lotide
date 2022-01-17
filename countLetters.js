// const letterPositions = function (sentence) {
//   // console.log(sentence);
//   const results = {};
//   for (let i = 0; i < sentence.length; i++) {
//     // console.log(results[sentence[i]]);
//     // results[sentence[i]] = results[sentence[i]].push(i)
//     // key sentence[i]
//     // value results[sentence[i]].push(i)
//     if (results[sentence[i]]) {
//       results[sentence[i]].push(i);
//     } else {
//       results[sentence[i]] = [];
//       results[sentence[i]].push(i);
//     }
//     // results[sentence[i]] = i;
//   }
//   console.log(results);
//   return results;
// };

// // const assertArraysEqual = function (actual) {
// // };
// letterPositions('hello');

const test = [
  {
    test1: 'test',
    test2: 'test',
    test3: 'test',
  },
];
let one = test.slice();
test.test1 = [test.test1];
test.test1.push('test2');
console.log(test);
console.log(one);
