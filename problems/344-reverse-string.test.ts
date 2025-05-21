import { describe, expect, test } from 'vitest'

// https://leetcode.com/problems/reverse-string/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const tmp = s[i]
    s[i] = s[j]
    s[j] = tmp
  }
}

describe('344. Reverse String', () => {
  test('Case 1', () => {
    let str = ['h', 'e', 'l', 'l', 'o']
    reverseString(str)
    expect(str).toEqual(['o', 'l', 'l', 'e', 'h'])
  })
  test('Case 2', () => {
    let str = ['H', 'a', 'n', 'n', 'a', 'h']
    reverseString(str)
    expect(str).toEqual(['h', 'a', 'n', 'n', 'a', 'H'])
  })
})
