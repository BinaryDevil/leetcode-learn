/**
 * #347 Top K Frequent Elements
 * A size-k min-heap keeps the k largest frequencies; the root is easiest to evict.
 * Time: O(n + u log k) | Space: O(u + k), where u is the number of unique values.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const frequencies = new Map()
  for (const number of nums) {
    frequencies.set(number, (frequencies.get(number) ?? 0) + 1)
  }

  const heap = []
  function siftUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2)
      if (heap[parent][0] <= heap[index][0]) break
      ;[heap[parent], heap[index]] = [heap[index], heap[parent]]
      index = parent
    }
  }

  function siftDown(index) {
    while (true) {
      const left = index * 2 + 1
      const right = left + 1
      let smallest = index
      if (left < heap.length && heap[left][0] < heap[smallest][0]) {
        smallest = left
      }
      if (right < heap.length && heap[right][0] < heap[smallest][0]) {
        smallest = right
      }
      if (smallest === index) return
      ;[heap[index], heap[smallest]] = [heap[smallest], heap[index]]
      index = smallest
    }
  }

  for (const [number, frequency] of frequencies) {
    heap.push([frequency, number])
    siftUp(heap.length - 1)
    if (heap.length > k) {
      heap[0] = heap.pop()
      siftDown(0)
    }
  }

  return heap.map(([, number]) => number)
}

module.exports = topKFrequent
