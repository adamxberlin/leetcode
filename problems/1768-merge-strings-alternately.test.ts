import { describe, expect, test } from 'vitest'

function mergeAlternately(word1: string, word2: string): string {
  let result = ''
  let i = 0
  let j = 0
  while (i < word1.length && j < word2.length) {
    result += word1[i] + word2[j]
    i++, j++
  }

  if (i < word1.length) {
    result += word1.slice(i)
  } else if (j < word2.length) {
    result += word2.slice(j)
  }

  return result
}

describe('1768. Merge Strings Alternately', () => {
  test('Case 1', () => {
    const word1 = 'abc'
    const word2 = 'pqr'
    expect(mergeAlternately(word1, word2)).toBe('apbqcr')
  })
  test('Case 2', () => {
    const word1 = 'ab'
    const word2 = 'pqrs'
    expect(mergeAlternately(word1, word2)).toBe('apbqrs')
  })
  test('Case 3', () => {
    const word1 = 'abcd'
    const word2 = 'pq'
    expect(mergeAlternately(word1, word2)).toBe('apbqcd')
  })
})
