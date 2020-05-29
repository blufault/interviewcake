// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of ints and returns an array of the products.

const getProductsOfAllIntsExceptAtIndex = (array) => {
  const result = new Array(array.length).fill(1);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (i !== j) {
        result[j] *= array[i];
      }
    }
  }

  console.log({ result });
};

getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]);

