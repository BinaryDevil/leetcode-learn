"""#560 Subarray Sum Equals K
Count earlier prefix sums equal to current_prefix - k.
Time: O(n) | Space: O(n)
"""


class Solution:
    def subarraySum(self, nums, k):
        frequencies = {0: 1}
        prefix_sum = 0
        total = 0

        for number in nums:
            prefix_sum += number
            total += frequencies.get(prefix_sum - k, 0)
            frequencies[prefix_sum] = frequencies.get(prefix_sum, 0) + 1

        return total
