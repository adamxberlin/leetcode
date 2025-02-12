import { expect, test } from 'vitest'

import { LRUCache } from '../problems/146-lru-cache'

test('should work with provided test from LeetCode', () => {
  const cache = new LRUCache(2)
  expect(cache.put(1, 1)).toBeUndefined()
  expect(cache.put(2, 2)).toBeUndefined()
  expect(cache.get(1)).toBe(1)
  expect(cache.put(3, 3)).toBeUndefined()
  expect(cache.get(2)).toBe(-1)
  expect(cache.put(4, 4)).toBeUndefined()
  expect(cache.get(1)).toBe(-1)
  expect(cache.get(3)).toBe(3)
  expect(cache.get(4)).toBe(4)
})
