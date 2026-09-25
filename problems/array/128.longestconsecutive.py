"""#128 Longest Consecutive Sequence
Only expand from sequence starts, where number - 1 is absent.
Time: O(n) average | Space: O(n)
"""


class Solution:
    def longestConsecutive(self, nums):
        values = set(nums)
        longest = 0

        for number in values:
            if number - 1 not in values:
                length = 1
                while number + length in values:
                    length += 1
                longest = max(longest, length)

        return longest
