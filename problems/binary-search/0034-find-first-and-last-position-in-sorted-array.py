"""#34 Find First and Last Position of Element in Sorted Array
Use lower_bound and upper_bound to find the half-open target range.
Time: O(log n) | Space: O(1)
"""


class Solution:
    def searchRange(self, nums, target):
        def lower_bound(value):
            left, right = 0, len(nums)
            while left < right:
                middle = left + (right - left) // 2
                if nums[middle] < value:
                    left = middle + 1
                else:
                    right = middle
            return left

        first = lower_bound(target)
        if first == len(nums) or nums[first] != target:
            return [-1, -1]

        after_last = lower_bound(target + 1)
        return [first, after_last - 1]
