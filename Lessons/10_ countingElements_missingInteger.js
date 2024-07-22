
// 100%
const solution = (A) => {
  const numKeys = {}
  A.forEach(num => numKeys[num] = true)

  let min;
  let currentMin = 1;
  while (min === undefined) {
      if (numKeys[currentMin]) {
          currentMin += 1
          continue
      };

      min = currentMin;
      break;
  }
  return min
};

// 100%
const solution3 = (A) => {
  const numSet = new Set(A);

  let min = 1;
  while (numSet.has(min)) {
    min++;
  }

  return min;
};

// 66%
const solution2 = (A) => {
  for (let i = 1; A.length; i++) {
    if (!A.includes(i)) return i
  }
};
