// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of ints and returns an array of the products.

const getProductsOfAllIntsExceptAtIndex = (array) => {
  const beforeEachIndex = (array) => {
    let productSoFar = 1;
    return array.reduce((accum, curr, index) => {
      accum[index] = productSoFar;
      productSoFar *= array[index];
      return accum;
    }, []);
  };

  const afterEachIndex = (array, productBeforeIndex) => {
    let productSoFar = 1;

    for (let i = array.length - 1; i >= 0; i--) {
      productBeforeIndex[i] *= productSoFar;
      productSoFar *= array[i];
    }
  };

  const productsOfAllIntsBeforeIndex = beforeEachIndex(array);
  afterEachIndex(array, productsOfAllIntsBeforeIndex);

  console.log({ productsOfAllIntsBeforeIndex});
};

getProductsOfAllIntsExceptAtIndex([3, 1, 2, 5, 6, 4]);

