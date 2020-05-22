const meetings = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

const mergeRanges = (meetings) => {
  const sorted = meetings.sort((a, b) => a.startTime - b.startTime);

  let tmp = sorted[0];
  const result = [];

  for (let i = 1; i < sorted.length; i++) {
    const curr = sorted[i];

    if (curr.startTime <= tmp.endTime) {
      tmp.endTime = curr.endTime;
    } else {
      result.push(tmp);
      tmp = curr;
    }
  }

  result.push(tmp);

  console.log({ result });
  return result;
};

mergeRanges(meetings)

