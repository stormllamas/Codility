const solution = (A) => {
  let currentPasses = A.filter((car) => car === 1).length;
  let totalPasses = 0;

  for (let i = 0; i < A.length; i++) {
    const car = A[i];
    if (car === 0) {
      totalPasses += currentPasses;
    } else {
      currentPasses -= 1;
    }
  }

  return totalPasses > 1000000000 ? -1 : totalPasses;
};
