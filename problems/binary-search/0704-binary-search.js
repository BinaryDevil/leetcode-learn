/**
 * #704 Binary Search
 * Invariant: if target exists, it remains within the inclusive search range.
 * Time: O(log n) | Space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2)
    if (nums[middle] === target) return middle
    if (nums[middle] < target) left = middle + 1
    else right = middle - 1
  }

  return -1
}

module.exports = search
