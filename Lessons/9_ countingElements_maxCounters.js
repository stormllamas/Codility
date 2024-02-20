const solution = (N, A) => {
  const counter = {};
  for (let i = 1; i <= N; i++) {
    counter[i] = 0;
  }
  let max = 0;
  let maxToSet = 0;
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    if (num === N + 1) {
      maxToSet = max;
    } else {
      if (counter[num] < maxToSet) {
        counter[num] = maxToSet + 1;
      } else {
        counter[num] += 1;
      }
      if (counter[num] > max) max = counter[num];
    }
  }

  return Object.values(counter).map((val) => (val < maxToSet ? maxToSet : val));
};
