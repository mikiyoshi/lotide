// FUNCTION IMPLEMENTATION
// const eqArrays = (a, b) =>
//   a.length === b.length && a.every((v, i) => v === b[i]);
const flatten = function (a) {
  // console.log(a);
  // const list = Array.isArray(a);
  // console.log(list);
  const list = [];
  for (let x of a) {
    // console.log(x);
    if (Array.isArray(x)) {
      for (let i = 0; i < x.length; i++) {
        list.push(x[i]);
      }
    } else {
      list.push(x);
    }
  }
  console.log(list);
};

// TEST CODE
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
