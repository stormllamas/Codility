const solution = (A) => {
  if (!A.length) return 0;
  const checkedVals = {};
  for (let i = 0; i < A.length; i++) {
    const val = A[i];
    if (checkedVals[val]) {
      checkedVals[val] += 1;
    } else {
      checkedVals[val] = 1;
    }
  }

  let oddOccurence = 0;
  Object.keys(checkedVals).forEach((key) => {
    const val = checkedVals[key];
    if (val % 2 === 1) oddOccurence = key;
  });
  return +oddOccurence;
};
