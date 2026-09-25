/**
 * #34 Find First and Last Position of Element in Sorted Array
 * Pattern: lower bound and upper bound binary searches.
 * Time: O(log n) | Space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  function bound(strict) {
    let left = 0
    let right = nums.length

    while (left < right) {
      const middle = left + Math.floor((right - left) / 2)
      const shouldMoveRight = strict
        ? nums[middle] <= target
        : nums[middle] < target
      if (shouldMoveRight) left = middle + 1
      else right = middle
    }

    return left
  }

  const first = bound(false)
  if (first === nums.length || nums[first] !== target) return [-1, -1]
  return [first, bound(true) - 1]
}

module.exports = searchRange
