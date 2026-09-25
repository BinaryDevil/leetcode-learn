"""#1 Two Sum
Pattern: hash-map complement lookup.
Time: O(n) | Space: O(n)
"""


class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for index, number in enumerate(nums):
            complement = target - number
            if complement in seen:
                return [seen[complement], index]
            seen[number] = index
