import { describe, expect, test } from 'vitest'

function validPalindrome(s: string, i = 0, j = s.length - 1, lastChance = false): boolean {
  while (i < j) {
    if (s[i] !== s[j]) {
      if (lastChance) {
        return false
      } else if (validPalindrome(s, i + 1, j, true)) {
        return true
      } else {
        return validPalindrome(s, i, j - 1, true)
      }
    }
    i++, j--
  }

  return true
}

describe('680. Valid Palindrome II', () => {
  test('Case 1', () => {
    const s = 'aba'
    expect(validPalindrome(s)).toBe(true)
  })
  test('Case 2', () => {
    const s = 'abca'
    expect(validPalindrome(s)).toBe(true)
  })
  test('Case 3', () => {
    const s = 'abc'
    expect(validPalindrome(s)).toBe(false)
  })
  test('Case 4', () => {
    const s = 'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga'
    expect(validPalindrome(s)).toBe(true)
  })
  test('Case 5', () => {
    const s = 'zryxeededexyz'
    expect(validPalindrome(s)).toBe(false)
  })
})
