const { AssertDeepEqual } = require('../helper');

// Write an efficient function that takes stockPrices and returns the best profit
//  I could have made from one purchase and one sale of one share of Apple stock yesterday.
const getMaxProfit = (stockPrices) => {
  if (stockPrices.length < 2) {
    throw 'stockPrices needs at least 2 entires.';
  }
  let prev = stockPrices[0];
  let max_profit = Number.NEGATIVE_INFINITY;
  let curr_profit = 0;

  for (let i = 1; i < stockPrices.length; i++) {
    const current_price = stockPrices[i];
    curr_profit = current_price - prev;
    if (curr_profit > max_profit) {
      max_profit = curr_profit;
    }

    if (prev > current_price) {
      prev = current_price;
    }
  }

  return max_profit;
};

let desc = 'basic example';
let actual = getMaxProfit([10, 7, 5, 8, 11, 9]);
let expected = 6;
AssertDeepEqual(actual, expected, desc);

desc = 'negative profit';
actual = getMaxProfit([100, 90, 80, 50, 10]);
expected = -10;
AssertDeepEqual(actual, expected, desc);

desc = 'positive profit';
actual = getMaxProfit([10, 20, 30, 40, 50, 100, 90]);
expected = 90;
AssertDeepEqual(actual, expected, desc);

desc = 'no profit';
actual = getMaxProfit([10, 10, 10, 10, 10]);
expected = 0;
AssertDeepEqual(actual, expected, desc);

