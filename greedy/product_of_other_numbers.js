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

  const afterEachIndex = (array) => {
    let productSoFar = 1;
    const productsOfAllIntsAfterIndex = [];

    for (let i = array.length - 1; i >= 0; i--) {
      productsOfAllIntsAfterIndex[i] = productSoFar;
      productSoFar *= array[i];
    }

    return productsOfAllIntsAfterIndex;
  };

  const productsOfAllIntsBeforeIndex = beforeEachIndex(array);
  const productsOfAllIntsAfterIndex = afterEachIndex(array);

  const exceptAtIndex = () => {
    return array.reduce((accum, curr, index) => {
      const allExcept = productsOfAllIntsBeforeIndex[index] * productsOfAllIntsAfterIndex[index];

      accum.push(allExcept);
      return accum;
    }, []);
  };

  console.log({ exceptAtIndex: exceptAtIndex() });

};

getProductsOfAllIntsExceptAtIndex([3, 1, 2, 5, 6, 4]);

