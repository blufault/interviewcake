function AssertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);

  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} !== ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}

module.exports = {
  AssertDeepEqual
};
