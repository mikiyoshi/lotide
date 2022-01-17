// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// Flattening nested arrays

// reduce and concat

const arr = [1, 2, [3, 4]];

// To flat single level array
console.log(`One: ${arr.flat()}`);
// is equivalent to
const sample1 = arr.reduce((acc, val) => acc.concat(val), []);
console.log(`Two: ${sample1}`);
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = (arr) => [].concat(...arr);
console.log(`Three: ${flattened(arr)}`);

// reduce + concat + isArray + recursivity
function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}

console.log(`Three2: ${flatDeep(arr, Infinity)}`);

// Flattening nested arrays
const arr1 = [1, 2, [3, 4]];
console.log(`Four: ${arr1.flat()}`);
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(`Five: ${arr2.flat()}`);
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(`Six: ${arr3.flat(2)}`);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [[[[9, , [], 10]]]]]]]];
console.log(`Seven: ${arr4.flat(Infinity)}`);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Flattening and array holes

// The flat method removes empty slots in arrays:

const arr5 = [1, 2, , 4, 5];
console.log(`Eight: ${arr5.flat()}`);
// [1, 2, 4, 5]
