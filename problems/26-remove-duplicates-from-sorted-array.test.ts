import { describe, expect, test } from 'vitest'

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
  let k = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      k++
      nums[k] = nums[i]
    }
  }

  return k + 1
}

describe('26. Remove Duplicates from Sorted Array', () => {
  test('Case 1', () => {
    const nums = [1, 1, 2]
    const expectedNums = [1, 2]
    const k = removeDuplicates(nums)
    expect(k).toBe(expectedNums.length)
    expect(nums.slice(0, k)).toEqual(expectedNums)
  })
  test('Case 2', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const expectedNums = [0, 1, 2, 3, 4]
    const k = removeDuplicates(nums)
    expect(k).toBe(expectedNums.length)
    expect(nums.slice(0, k)).toEqual(expectedNums)
  })
  test('Case 3', () => {
    const nums = [1, 2]
    const expectedNums = [1, 2]
    const k = removeDuplicates(nums)
    expect(k).toBe(expectedNums.length)
    expect(nums.slice(0, k)).toEqual(expectedNums)
  })
  test('Case 4', () => {
    const nums = [1, 2, 2]
    const expectedNums = [1, 2]
    const k = removeDuplicates(nums)
    expect(k).toBe(expectedNums.length)
    expect(nums.slice(0, k)).toEqual(expectedNums)
  })
  test('Case 5', () => {
    const nums = [1, 2, 3, 3]
    const expectedNums = [1, 2, 3]
    const k = removeDuplicates(nums)
    expect(k).toBe(expectedNums.length)
    expect(nums.slice(0, k)).toEqual(expectedNums)
  })
})
