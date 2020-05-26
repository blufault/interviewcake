// Write an efficient function that checks whether any permutation of an input string is a palindrome.

const { AssertDeepEqual } = require('../helper');

// input: index and input
// output: return an array
const exclusive_get = (index, input) => {
  return input.split('').reduce((accum, curr, r_index) => {
    if (r_index !== index) {
      accum.push(curr);
    }

    return accum;
  }, []).join('');
};

// output: return an array
const swap = (root, str) => {
  return [root + str[0] + str[1], root + str[1] + str[0]];
};

const permutate = (root, rest) => {
  if (rest.length > 2) {
    let new_root = root;
    return permutation(rest).reduce((accum, sub) => {
      new_root += sub;
      accum.push(new_root);
      new_root = root;
      return accum;
    }, []);
  }
  return swap(root, rest);
};

const permutation = (input) => {
  const set = [];
  for (let i = 0; i < input.length; i++) {
    set.push(...permutate(input[i], exclusive_get(i, input)));
  }
  return set;
};

// input: string
// output: return true or false if the string is a palidrome
const isPalidrome = (input) => {
  for (let i = 0; i < Math.ceil(input.length / 2); i++) {
    const complement = (input.length - 1) - i;
    if (input[i] !== input[complement]) {
      return false;
    }
  }

  return true;
};

const isPalidromeFromPermutation = (input) => {
  const permutations = permutation(input);
  let result = false;

  permutations.forEach((permutation) => {
    if (isPalidrome(permutation)) {
      result = true;
    }
  });

  return result;
};

let desc = 'civic';
let actual = isPalidromeFromPermutation('civic');
let expected = true;
AssertDeepEqual(actual, expected, desc);

desc = 'civil';
actual = isPalidromeFromPermutation('civil');
expected = false;
AssertDeepEqual(actual, expected, desc);
