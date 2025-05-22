import { describe, expect, test } from 'vitest'

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [++left, ++right]
    }
    if (sum < target) {
      left++
    } else {
      right--
    }
  }

  throw new Error('Invalid input!')
}

describe('167. Two Sum II - Input Array Is Sorted', () => {
  test('Case 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2])
  })
  test('Case 2', () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3])
  })
  test('Case 3', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2])
  })
  test('Case 4', () => {
    expect(twoSum([-5, -3, 0, 2, 4, 6, 8], 5)).toEqual([2, 7])
  })
})
