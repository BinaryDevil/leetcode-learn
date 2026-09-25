/**
 * #53 Maximum Subarray
 * Pattern: Kadane's algorithm.
 * Invariant: bestEndingHere is the best sum of a subarray ending at this index.
 * Time: O(n) | Space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let bestEndingHere = nums[0]
  let bestOverall = nums[0]

  for (let i = 1; i < nums.length; i += 1) {
    bestEndingHere = Math.max(nums[i], bestEndingHere + nums[i])
    bestOverall = Math.max(bestOverall, bestEndingHere)
  }

  return bestOverall
}

module.exports = maxSubArray
