/**
 * #11 Container With Most Water
 *
 * Link: https://leetcode.com/problems/container-with-most-water/
 * Tags: array, two pointers
 * Difficulty: Medium
 *
 * Move the pointer at the shorter wall: moving the taller wall cannot increase
 * the limiting height, while it always makes the container narrower.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let best = 0

  while (left < right) {
    const containerHeight = Math.min(height[left], height[right])
    best = Math.max(best, containerHeight * (right - left))

    if (height[left] < height[right]) {
      left += 1
    } else {
      right -= 1
    }
  }

  return best
}
