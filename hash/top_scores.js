const { AssertDeepEqual } = require('../helper');

// Time Complexity: O(n) because of the reduceRight. It does not account the for-loop inside the reduceRight method
// Space Complexity: O(n)
const sortScores = (unsortedScores, highestPossibleScore) => {
  if (!unsortedScores.length) {
    return [];
  }

  const cache = {};

  unsortedScores.forEach((score) => {
    if (cache[score]) {
      cache[score]++;
    } else {
      cache[score] = 1;
    }
  });

  console.log({ cache });
  return Object.keys(cache).reduceRight((accum, key) => {
    for (let i = 0; i < cache[key]; i++) {
      accum.push(Number(key));
    }
    return accum;
  }, []);
};

// Test
let desc = 'empty scores';
let actual = sortScores([], 55);
let expected = [];
AssertDeepEqual(actual, expected, desc);

desc = 'one scores';
actual = sortScores([55], 100);
expected = [55];
AssertDeepEqual(actual, expected, desc);

desc = 'two scores';
actual = sortScores([55, 90], 100);
expected = [90, 55];
AssertDeepEqual(actual, expected, desc);

desc = 'many scores';
actual = sortScores([37, 89, 41, 65, 91, 53], 100);
expected = [91, 89, 65, 53, 41, 37];
AssertDeepEqual(actual, expected, desc);

desc = 'repeated scores';
actual = sortScores([20, 10, 30, 30, 10, 20], 100);
expected = [30, 30, 20, 20, 10, 10];
AssertDeepEqual(actual, expected, desc);

