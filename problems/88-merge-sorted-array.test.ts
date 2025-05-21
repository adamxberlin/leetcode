import { describe, expect, test } from 'vitest'

// https://leetcode.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // Start from last array value (i.e. array length - 1)
  m--, n--

  for (let i = nums1.length - 1; i >= 0; i--) {
    // Handle cases where pointers go out of bounds
    const num1 = nums1[m] ?? -Infinity
    const num2 = nums2[n] ?? -Infinity

    if (num1 > num2) {
      nums1[i] = num1
      m--
    } else {
      nums1[i] = num2
      n--
    }
  }
}

describe('88. Merge Sorted Array', () => {
  test('Case 1', () => {
    let nums = [1, 2, 3, 0, 0, 0]
    merge(nums, 3, [2, 5, 6], 3)
    expect(nums).toEqual([1, 2, 2, 3, 5, 6])
  })
  test('Case 2', () => {
    let nums = [1]
    merge(nums, 1, [], 0)
    expect(nums).toEqual([1])
  })
  test('Case 3', () => {
    let nums = [0]
    merge(nums, 0, [1], 1)
    expect(nums).toEqual([1])
  })
  test('Case 4', () => {
    let nums = [2, 0]
    merge(nums, 1, [1], 1)
    expect(nums).toEqual([1, 2])
  })
  test('Case 5', () => {
    let nums = [0, 0, 3, 0, 0, 0, 0, 0, 0]
    merge(nums, 3, [-1, 1, 1, 1, 2, 3], 6)
    expect(nums).toEqual([-1, 0, 0, 1, 1, 1, 2, 3, 3])
  })
})
