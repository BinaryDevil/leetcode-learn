"""#704 Binary Search
Invariant: if target exists, it remains in the inclusive search interval.
Time: O(log n) | Space: O(1)
"""


class Solution:
    def search(self, nums, target):
        left, right = 0, len(nums) - 1
        while left <= right:
            middle = left + (right - left) // 2
            if nums[middle] == target:
                return middle
            if nums[middle] < target:
                left = middle + 1
            else:
                right = middle - 1
        return -1
