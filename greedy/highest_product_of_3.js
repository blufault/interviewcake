const { AssertDeepEqual } = require('../helper');
// Given an array of integers, find the highest
// product you can get from three of the integers.

const highestProductOf3 = (array) => {
  if (array.length < 3) {
    throw 'Array needs to have more than 3 elements.';
  }

  const sortedArray = array.sort((a, b) => a-b);
  console.log({ sortedArray });
  let a = sortedArray[0], b = sortedArray[1], c = sortedArray[2];
  let highestProduct = Number.NEGATIVE_INFINITY;

  for (let i = 3; i < sortedArray.length; i++) {
    const current = sortedArray[i];

    if (current > c) {
      if (!(a < 0 && b < 0)) {
        a = Math.max(a, b);
        b = Math.max(b, c);
        c = Math.max(c, current);
      } else {
        if (c < 0) {
          a = Math.max(a, b);
          b = Math.max(b, c);
          c = Math.max(c, current);
        }
        c = Math.max(c, current);
      }
    }

    const currentProduct = a * b * c;
    if (currentProduct > highestProduct) {
      highestProduct = currentProduct;
      console.log({ highestProduct });
    }
  }

  return highestProduct;
};

let desc = 'example';
let actual = highestProductOf3([1, 3, 5, 2, -2, -10]); // -10, -2, 1, 2, 3, 5
let expected = 100;
AssertDeepEqual(actual, expected, desc);

desc = 'one negative';
actual = highestProductOf3([5, 2, 3, 4, -10]); // -10, 2, 3, 4, 5
expected = 60;
AssertDeepEqual(actual, expected, desc);

desc = 'all negative';
actual = highestProductOf3([-5, -1, -3, -2]); // -5, -3, -2, -1
expected = -6;
AssertDeepEqual(actual, expected, desc);
