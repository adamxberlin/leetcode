class LRUCache {
  #maxCapacity: number
  #cache: Map<number, number>

  constructor(capacity: number) {
    this.#maxCapacity = capacity
    this.#cache = new Map()
  }

  get(key: number): number {
    if (!this.#cache.has(key)) return -1

    const value = this.#cache.get(key) as number
    this.#cache.delete(key)
    this.#cache.set(key, value)

    return value
  }

  put(key: number, value: number): void {
    if (this.#cache.has(key)) {
      this.#cache.delete(key)
    } else if (this.#cache.size > 0 && this.#cache.size === this.#maxCapacity) {
      const lruKey = this.#cache.keys().next().value
      this.#cache.delete(lruKey)
    }

    this.#cache.set(key, value)

    return
  }
}
