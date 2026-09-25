/**
 * #121 Best Time to Buy and Sell Stock
 * Pattern: one pass; track the lowest earlier price.
 * Invariant: minPrice is the lowest price before the current day.
 * Time: O(n) | Space: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minPrice = Infinity
  let bestProfit = 0

  for (const price of prices) {
    minPrice = Math.min(minPrice, price)
    bestProfit = Math.max(bestProfit, price - minPrice)
  }

  return bestProfit
}

module.exports = maxProfit
