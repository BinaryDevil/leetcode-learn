"""#347 Top K Frequent Elements
A size-k min-heap retains the values with the largest frequencies.
Time: O(n + u log k) | Space: O(u + k), where u is the unique-value count.
"""

from collections import Counter
import heapq


class Solution:
    def topKFrequent(self, nums, k):
        heap = []
        for number, frequency in Counter(nums).items():
            heapq.heappush(heap, (frequency, number))
            if len(heap) > k:
                heapq.heappop(heap)
        return [number for _, number in heap]
