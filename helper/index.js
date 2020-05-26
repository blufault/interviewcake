function AssertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);

  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} !== ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}

const isMapEqual = (map1, map2) => {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, val] of map1) {
    const testVal = map2.get(key);

    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }

  return true;
};

const assert = (condition, desc) => {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
};

module.exports = {
  AssertDeepEqual,
  isMapEqual,
  assert
};
