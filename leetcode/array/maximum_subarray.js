const sumAll = (start, end, arr) => {
  let localMaxSum = Number.NEGATIVE_INFINITY;
  for (let i = end; i >= start; i--) {
    //console.log(arr.slice(start, i + 1));
    const localSum = arr.slice(start, i + 1).reduce((accum, curr) => {
      accum += curr;
      return accum;
    }, 0);

    localMaxSum = Math.max(localMaxSum, localSum);
  }

  return localMaxSum;
};

const maxSubArray = (nums) => {
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    const sum = sumAll(i, nums.length - 1, nums);

    maxSum = Math.max(maxSum, sum);
  }

  console.log({ maxSum });
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
