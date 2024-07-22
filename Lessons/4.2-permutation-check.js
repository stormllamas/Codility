const solution = (A) => {
  const mappedArray = {};
  A.forEach(num => {
      mappedArray[num] = true
  })
  const sortedArray = Object.keys(mappedArray).sort((a, b) => +a - +b)

  const Alength = A.length
  if (+sortedArray[Alength - 1] === Alength) return 1
  return 0
}
