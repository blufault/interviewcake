// Comeback to this later..

// Lets break this down... lets first get the algorithm going then apply the iteration part
const canCompleteCircuit = (gas, cost) => {
  let startingIndex = 3;
  let unitGas = 0;

  console.log(`Start at station ${gas[startingIndex]} (index ${startingIndex}) and fill up with ${gas[startingIndex]} unit of gas. Your tank = ${unitGas} + ${gas[startingIndex]} = ${unitGas += gas[startingIndex]}`);

  console.log({ unitGas });

  let prevIndex = startingIndex;
  let travelIndex = startingIndex + 1;
  while (travelIndex !== startingIndex) {
    console.log(`Travel to station ${gas[travelIndex]} (index ${travelIndex}). Your tank = ${unitGas} - ${cost[prevIndex]} + ${gas[travelIndex]} = ${unitGas = unitGas - cost[prevIndex] + gas[travelIndex]}`);

    if (travelIndex === 4) {
      travelIndex = 0;
      prevIndex = 4;
    } else {
      prevIndex = travelIndex;
      travelIndex++;
    }
  }
};

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
