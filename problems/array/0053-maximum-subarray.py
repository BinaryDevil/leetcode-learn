"""#53 Maximum Subarray
Kadane invariant: best_ending_here is the best sum ending at this index.
Time: O(n) | Space: O(1)
"""


class Solution:
    def maxSubArray(self, nums):
        best_ending_here = best_overall = nums[0]
        for number in nums[1:]:
            best_ending_here = max(number, best_ending_here + number)
            best_overall = max(best_overall, best_ending_here)
        return best_overall
