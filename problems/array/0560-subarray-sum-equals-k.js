/**
 * #560 Subarray Sum Equals K
 *
 * Link: https://leetcode.com/problems/subarray-sum-equals-k/
 * Tags: array, prefix sum, hash map
 * Difficulty: Medium
 *
 * If a current prefix sum is `sum`, every earlier prefix sum of `sum - k`
 * leaves a subarray with sum `k`. The map stores the count because identical
 * earlier prefix sums represent distinct starting positions.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const prefixFrequencies = new Map([[0, 1]])
  let prefixSum = 0
  let count = 0

  for (const number of nums) {
    prefixSum += number
    count += prefixFrequencies.get(prefixSum - k) ?? 0
    prefixFrequencies.set(
      prefixSum,
      (prefixFrequencies.get(prefixSum) ?? 0) + 1,
    )
  }

  return count
}
