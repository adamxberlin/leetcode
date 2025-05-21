import { describe, expect, test } from 'vitest'

// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
  // Unexpectedly faster, cleaner and more concise than comparing and skipping values!
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) return false
    i++, j--
  }

  return true
}

describe('125. Valid Palindrome', () => {
  test('Case 1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })
  test('Case 2', () => {
    expect(isPalindrome('race a car')).toBe(false)
  })
  test('Case 3', () => {
    expect(isPalindrome(' ')).toBe(true)
  })
  test('Case 4', () => {
    expect(isPalindrome('.,')).toBe(true)
  })
  test('Case 5', () => {
    expect(isPalindrome('0P')).toBe(false)
  })
})
