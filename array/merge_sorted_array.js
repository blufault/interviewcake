// We have our list of orders sorted numerically already, in lists.
// Write a function to merge our lists of orders into one sorted list.

const { AssertDeepEqual } = require('../helper');

const mergeArrays = (lista, listb) => {
  let a_index = b_index = current_index = 0;
  const result = [];

  while (current_index !== lista.length + listb.length) {
    if (listb[b_index] > lista[a_index] || !listb[b_index]) {
      result[current_index++] = lista[a_index++];
    } else {
      result[current_index++] = listb[b_index++];
    }
  }

  return result;
};

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
AssertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
AssertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([1, 2, 3], []);
expected = [1, 2, 3];
AssertDeepEqual(actual, expected, desc);

desc = 'both arrays has the same length';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
AssertDeepEqual(actual, expected, desc);

desc = 'arrays are different length';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
AssertDeepEqual(actual, expected, desc);
