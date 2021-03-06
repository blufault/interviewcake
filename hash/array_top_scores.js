const { AssertDeepEqual } = require('../helper');

// Time Complexity: O(n^2) because of the reduceRight and nested for-loop
// Space Complexity: O(n)
const sortScores = (unsortedScores, highestPossibleScore) => {
  if (!unsortedScores.length) {
    return [];
  }

  const filled = new Array(highestPossibleScore).fill(0);

  unsortedScores.forEach(score => {
    filled[score]++;
  });

  const result = [];
  for (let i = filled.length; i > 0; i--) {
    if (filled[i]) {
      for (let j = 0; j < filled[i]; j++) {
        result.push(i);
      }
    }
  }

  return result;
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

