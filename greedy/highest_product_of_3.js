const { AssertDeepEqual } = require('../helper');

// Given an array of integers, find the highest
// product you can get from three of the integers.

const highestProductOf3 = (array) => {
  if (array.length < 3) {
    throw 'Array needs to have more than 3 indices.';
  } else if (array.lenght === 3) {
    return array[0] * array[1] * array[2];
  }

  let highest_product = Number.NEGATIVE_INFINITY;
  let a = array[0], b = array[1], c = array[2];

  for (let i = 3; i <= array.length; i++) {
    const current_product = a * b * c;
    highest_product = Math.max(current_product, highest_product);

    const number = array[i];
    if (number > c) {
      a = Math.max(a, b);
      b = Math.max(b, c);
      c = Math.max(c, number);
    } else if (number > b) {
      a = Math.max(a, b);
      b = Math.max(b, number);
    } else if (number > a) {
      a = Math.max(a, number);
    }
  }

  return highest_product;
};


let desc = 'simple data';
let actual = highestProductOf3([1, 3, 5, 8, 10, 12]);
let expected = 960;
AssertDeepEqual(actual, expected, desc);

desc = 'array length 4 that has a 0.';
actual = highestProductOf3([5, 3, 1, 0]);
expected = 15;
AssertDeepEqual(actual, expected, desc);

desc = 'array length 3';
actual = highestProductOf3([5, 3, 1]);
AssertDeepEqual(actual, expected, desc);

desc = 'array length 4 with one negative number';
actual = highestProductOf3([-10, 5, 30, 10]);
expected = 1500;
AssertDeepEqual(actual, expected, desc);

desc = 'array length of 3 with all negative numbers';
actual = highestProductOf3([-1, -1, -1]);
expected = -1;
AssertDeepEqual(actual, expected, desc);

desc = 'array length of 3 with 2 negative numbers';
actual = highestProductOf3([-2, -2, 2]);
expected = 8;
AssertDeepEqual(actual, expected, desc);

desc = 'array length of 3 with 1 negative number';
actual = highestProductOf3([2, -2, 2]);
expected = -8;
AssertDeepEqual(actual, expected, desc);
