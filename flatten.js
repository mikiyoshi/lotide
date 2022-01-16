// FUNCTION IMPLEMENTATION
// const eqArrays = (a, b) =>
//   a.length === b.length && a.every((v, i) => v === b[i]);
const flatten = function (a) {
  // console.log(a);
  // Result 1
  // let flattened = a.flat(Infinity);
  // console.log(flattened);
  // Result 2
  // 再帰を使わずにスタックを使用して平坦化
  // non recursive flatten deep using a stack
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
  // note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
  // also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
  const stack = [...a];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  console.log(res.reverse());
  return res.reverse();
  // Result 3
  // const list = Array.isArray(a);
  // console.log(list);
  // const list = [];
  // for (let x of a) {
  //   // console.log(x);
  //   if (!Array.isArray(x)) {
  //     // 以下の呼び出しはすべて true を返します
  //     // Array.isArray([]);
  //     // Array.isArray([1]);
  //     // Array.isArray(new Array());
  //     // Array.isArray(new Array('a', 'b', 'c', 'd'));
  //     // Array.isArray(new Array(3));
  //     // // あまり知られていないものの Array.prototype は配列です
  //     // Array.isArray(Array.prototype);
  //     //
  //     // // 以下の呼び出しはすべて false を返します
  //     // Array.isArray();
  //     // Array.isArray({});
  //     // Array.isArray(null);
  //     // Array.isArray(undefined);
  //     // Array.isArray(17);
  //     // Array.isArray('Array');
  //     // Array.isArray(true);
  //     // Array.isArray(false);
  //     // Array.isArray({ __proto__: Array.prototype });
  //     list.push(x);
  //   }
  //   for (let i = 0; i < x.length; i++) {
  //     list.push(x[i]);
  //   }
  // }
  // console.log(list);
};
flatten([1, 2, [3, 4], 5, [[[[6, [1, 2]]]]]]); // => [1, 2, 3, 4, 5, 6]
