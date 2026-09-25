"""#973 K Closest Points to Origin
Keep a size-k max-heap via negative squared distances; discard the farthest.
Time: O(n log k) | Space: O(k)
"""

import heapq


class Solution:
    def kClosest(self, points, k):
        heap = []
        for x, y in points:
            distance = x * x + y * y
            heapq.heappush(heap, (-distance, x, y))
            if len(heap) > k:
                heapq.heappop(heap)
        return [[x, y] for _, x, y in heap]
