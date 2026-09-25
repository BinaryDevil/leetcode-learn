"""#15 3Sum
Sort, fix one value, then use two pointers; skip duplicates at each stage.
Time: O(n^2) | Space: O(1) extra, excluding sorting.
"""


class Solution:
    def threeSum(self, nums):
        nums.sort()
        triplets = []

        for first in range(len(nums) - 2):
            if first > 0 and nums[first] == nums[first - 1]:
                continue

            left, right = first + 1, len(nums) - 1
            while left < right:
                total = nums[first] + nums[left] + nums[right]
                if total < 0:
                    left += 1
                elif total > 0:
                    right -= 1
                else:
                    triplets.append([nums[first], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1

        return triplets
