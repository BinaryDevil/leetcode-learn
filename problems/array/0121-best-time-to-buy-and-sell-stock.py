"""#121 Best Time to Buy and Sell Stock
Track the lowest earlier price and the best profit seen so far.
Time: O(n) | Space: O(1)
"""


class Solution:
    def maxProfit(self, prices):
        lowest_price = float("inf")
        best_profit = 0

        for price in prices:
            lowest_price = min(lowest_price, price)
            best_profit = max(best_profit, price - lowest_price)

        return best_profit
