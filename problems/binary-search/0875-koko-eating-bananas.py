"""#875 Koko Eating Bananas
Binary-search the first eating speed whose required hours fit the limit.
Time: O(n log(max(piles))) | Space: O(1)
"""


class Solution:
    def minEatingSpeed(self, piles, h):
        left, right = 1, max(piles)

        while left < right:
            speed = left + (right - left) // 2
            hours = sum((pile + speed - 1) // speed for pile in piles)
            if hours <= h:
                right = speed
            else:
                left = speed + 1

        return left
