/**
 * #215 Kth Largest Element in an Array
 * Keep a size-k min-heap: its root is the weakest current top-k candidate.
 * Time: O(n log k) | Space: O(k)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const heap = []

  function siftUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2)
      if (heap[parent] <= heap[index]) break
      ;[heap[parent], heap[index]] = [heap[index], heap[parent]]
      index = parent
    }
  }

  function siftDown(index) {
    while (true) {
      const left = index * 2 + 1
      const right = left + 1
      let smallest = index
      if (left < heap.length && heap[left] < heap[smallest]) smallest = left
      if (right < heap.length && heap[right] < heap[smallest]) smallest = right
      if (smallest === index) return
      ;[heap[index], heap[smallest]] = [heap[smallest], heap[index]]
      index = smallest
    }
  }

  for (const number of nums) {
    heap.push(number)
    siftUp(heap.length - 1)
    if (heap.length > k) {
      heap[0] = heap.pop()
      siftDown(0)
    }
  }

  return heap[0]
}

module.exports = findKthLargest
