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
