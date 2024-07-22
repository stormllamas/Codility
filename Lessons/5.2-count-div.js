const solution = (A, B, K) => {
  if (!K) return 0;
  if (!B) return 1;
  const totalDivisions = Math.floor(B / K);

  const rangeHasInterval = A + K <= B;

  const startCount = K <= A ? 1 : 0;

  const offset = Math.ceil(A / K) - startCount;

  const inset = A === 0 || K > A ? 1 : 0

  return !rangeHasInterval ? B % K === 0 ? 1 : 0 : totalDivisions + inset - offset;
};
