const isServedInOrder = (takeoutOrders, dineinOrders, servedOrders) => {
  if (takeoutOrders.length + dineinOrders.length !== servedOrders.length) {
    return false;
  }

  let t = d = s = 0;
  let takeoutOrderMaxIndex = takeoutOrders.length - 1;
  let dineinOrderMaxIndex = dineinOrders.length - 1;

  while (s < servedOrders.length) {
    if (servedOrders[s] === takeoutOrders[t] && t <= takeoutOrderMaxIndex) {
      t++;
    } else if (servedOrders[s] === dineinOrders[d] && d <= dineinOrderMaxIndex) {
      d++
    } else {
      return false;
    }

    s++;
  }

  return true;
};

console.log(isServedInOrder([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]));
console.log(isServedInOrder([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]));
