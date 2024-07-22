const checkIfCrossed = (X, L) => {
  let frogHasCrossed = true
  for (let i = 1; i <= X; i++) {
      if (!L.has(i)) {
          frogHasCrossed = false
          break
      }
  }
  return frogHasCrossed
}

const solution = (X, A) => {
  const fallenLeaves = new Map()
  let added = 0
  for (let i = 0; i < A.length; i++) {
      const leafPos = A[i]
      if (leafPos <= X) {
        if (!fallenLeaves.has(leafPos)) {
          fallenLeaves.set(leafPos, true)
          added += 1
        }
        if (added === X) return i;
      }
  }
  return -1
};
