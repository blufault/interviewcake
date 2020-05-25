// Given al three arrays, write a function to check that my service is first-come, first-served.
// All food should come out in the same order customers requested.

const { AssertDeepEqual } = require('../helper');


// Time complexity: O(n)
const isFCFS = (takeOutOrders, dineInOrders, servedOrders) => {
  let ti = di = si = 0;

  // check to see if the take-out orders and dine-in orders are equal to the served order length
  if (takeOutOrders.length + dineInOrders.length !== servedOrders.length) {
    return false;
  }

  for (si; si < servedOrders.length; si++) {
    if (servedOrders[si] === takeOutOrders[ti]) {
      ti++;
    } else if (servedOrders[si] === dineInOrders[di]) {
      di++;
    } else {
      return false;
    }
  }

  return true;
};

let desc = 'this would not be first-come first-served, since order 3 was requested before order 5, but order 5 was served first';
let actual = isFCFS([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]);
let expected = false;
AssertDeepEqual(actual, expected, desc);

desc = 'this is first-come and first-served';
actual = isFCFS([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]);
expected = true;
AssertDeepEqual(actual, expected, desc);

desc = 'registers have different lengths';
actual = isFCFS([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
AssertDeepEqual(actual, false, desc);

desc = 'one register is empty';
actual = isFCFS([], [2, 3, 6], [2, 3, 6]);
AssertDeepEqual(actual, true, desc);

desc = 'served orders is missing orders';
actual = isFCFS([1, 5], [2, 3, 6], [1, 6, 3, 5]);
AssertDeepEqual(actual, false, desc);

desc = 'served orders has extra orders';
actual = isFCFS([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
AssertDeepEqual(actual, false, desc);

desc = 'one register has extra orders';
actual = isFCFS([1, 9], [7, 8], [1, 7, 8]);
AssertDeepEqual(actual, false, desc);

desc = 'one register has unserved orders';
actual = isFCFS([55, 9], [7, 8], [1, 7, 8, 9]);
AssertDeepEqual(actual, false, desc);

desc = 'order numbers are not sequential';
actual = isFCFS([27, 12, 18], [55, 31, 8], [55, 31, 8, 27, 12, 18]);
AssertDeepEqual(actual, true, desc);
