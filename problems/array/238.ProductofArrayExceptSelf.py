"""#238 Product of Array Except Self
Combine the product before each index with a running product after it.
Time: O(n) | Space: O(1) extra, excluding the output.
"""


class Solution:
    def productExceptSelf(self, nums):
        result = [1] * len(nums)
        prefix = 1
        for index, number in enumerate(nums):
            result[index] = prefix
            prefix *= number

        suffix = 1
        for index in range(len(nums) - 1, -1, -1):
            result[index] *= suffix
            suffix *= nums[index]

        return result
