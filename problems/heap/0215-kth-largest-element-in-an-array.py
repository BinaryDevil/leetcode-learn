"""#215 Kth Largest Element in an Array
Keep a size-k min-heap; its root is the weakest current top-k candidate.
Time: O(n log k) | Space: O(k)
"""

import heapq


class Solution:
    def findKthLargest(self, nums, k):
        heap = []
        for number in nums:
            heapq.heappush(heap, number)
            if len(heap) > k:
                heapq.heappop(heap)
        return heap[0]
