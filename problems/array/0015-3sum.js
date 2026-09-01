/**
 * #15 3Sum
 *
 * Link: https://leetcode.com/problems/3sum/
 * Tags: array, sorting, two pointers
 * Difficulty: Medium
 *
 * Sort first, then fix one number and use two pointers to find the other two.
 * Skipping equal values prevents duplicate triplets.
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1), excluding the returned result and sort implementation
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const triplets = []

  for (let index = 0; index < nums.length - 2; index += 1) {
    if (index > 0 && nums[index] === nums[index - 1]) continue
    if (nums[index] > 0) break

    let left = index + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[index] + nums[left] + nums[right]

      if (sum < 0) {
        left += 1
      } else if (sum > 0) {
        right -= 1
      } else {
        triplets.push([nums[index], nums[left], nums[right]])
        left += 1
        right -= 1

        while (left < right && nums[left] === nums[left - 1]) left += 1
        while (left < right && nums[right] === nums[right + 1]) right -= 1
      }
    }
  }

  return triplets
}
