/**
 * #973 K Closest Points to Origin
 * Keep a size-k max-heap by squared distance; its root is the farthest winner.
 * Squared distance preserves ordering and avoids unnecessary square roots.
 * Time: O(n log k) | Space: O(k)
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
  const heap = []
  const distance = ([x, y]) => x * x + y * y

  function siftUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2)
      if (heap[parent].distance >= heap[index].distance) break
      ;[heap[parent], heap[index]] = [heap[index], heap[parent]]
      index = parent
    }
  }

  function siftDown(index) {
    while (true) {
      const left = index * 2 + 1
      const right = left + 1
      let largest = index
      if (left < heap.length && heap[left].distance > heap[largest].distance) {
        largest = left
      }
      if (right < heap.length && heap[right].distance > heap[largest].distance) {
        largest = right
      }
      if (largest === index) return
      ;[heap[index], heap[largest]] = [heap[largest], heap[index]]
      index = largest
    }
  }

  for (const point of points) {
    heap.push({ point, distance: distance(point) })
    siftUp(heap.length - 1)
    if (heap.length > k) {
      heap[0] = heap.pop()
      siftDown(0)
    }
  }

  return heap.map(({ point }) => point)
}

module.exports = kClosest
