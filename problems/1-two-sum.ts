export function twoSum(nums: number[], target: number): number[] {
  const previousNums: Map<number, number> = new Map()

  for (let idx = 0; idx < nums.length; idx++) {
    const complementIdx = previousNums.get(target - nums[idx])
    if (complementIdx !== undefined) {
      return [complementIdx, idx]
    }

    previousNums.set(nums[idx], idx)
  }

  throw new Error('No solution found!')
}
