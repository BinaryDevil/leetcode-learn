"""#11 Container With Most Water
Move the shorter wall: the taller wall cannot improve the limiting height.
Time: O(n) | Space: O(1)
"""


class Solution:
    def maxArea(self, height):
        left, right = 0, len(height) - 1
        best = 0

        while left < right:
            best = max(best, min(height[left], height[right]) * (right - left))
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return best
