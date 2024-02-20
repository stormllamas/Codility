const solution = (A, K) => {
  if (!A?.length) return []
  for (let i = 0; i < K; i++) {
    const lastIndex = A.length -1
    const lastNum = A[lastIndex]
    A.pop(lastIndex)
    A.unshift(lastNum)
  }
  return A
}
