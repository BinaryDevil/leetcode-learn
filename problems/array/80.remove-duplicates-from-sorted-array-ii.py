"""#80 Remove Duplicates from Sorted Array II
Keep at most two copies by comparing against the value two write positions back.
Time: O(n) | Space: O(1)
"""


class Solution:
    def removeDuplicates(self, nums):
        write = 0
        for number in nums:
            if write < 2 or number > nums[write - 2]:
                nums[write] = number
                write += 1
        return write
