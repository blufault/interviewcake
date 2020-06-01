// Best Time to Buy and Sell Stock II
//
// Say you have an array prices for which the ith element is the price
// of the given stock on day i.
//
// Design:
// An algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Time Complexity: O(n)
// Space Complexity: O(1)

const maxProfit = (prices) => {
  let weeklyProfit = 0;
  let prev = prices[0];

  if (prices.length < 2) {
    return weeklyProfit;
  }

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const profit = price - prev;

    if (profit > 0) {
      weeklyProfit += profit;
    }

    prev = price;
  }

  return weeklyProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);
