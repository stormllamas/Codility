const solution = (A) => {
  if (!A?.length) return 1;
  const sortedA = A.sort((a, b) => a - b)
  const min = sortedA[0]
  if (min !== 1) return 1
  for(let i = 0; i < sortedA.length; i++) {
      const expectedNum = min + i
      if (sortedA[i] !== expectedNum) return  expectedNum
  }
  return sortedA[sortedA.length-1]
}
