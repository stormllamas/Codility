// My Initital Answer (100%)
const solution = (N) => {
  const decToBin = (dec)=> {
      return (dec >>> 0).toString(2);
  }
  const binaryNum = decToBin(N)

  let state = 0
  let counter = 0
  let longest = 0
  for (i=0; i < binaryNum.length; i++) {
      const curNum = binaryNum[i]
      if (state === 0) {
          if (curNum == 1) {
              state = 1
          }
      } else if (state === 1) {
          if (curNum == 0) {
              counter += 1
          } else {
              if (counter > longest) longest = counter
              counter = 0
          }
      }
  }
  return longest
}
