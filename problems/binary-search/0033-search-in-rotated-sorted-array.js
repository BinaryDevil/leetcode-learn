/**
 * #33 Search in Rotated Sorted Array
 * Pattern: identify which half is sorted, then keep the half containing target.
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

    if (nums[left] <= nums[middle]) {
      if (nums[left] <= target && target < nums[middle]) right = middle - 1
      else left = middle + 1
    } else if (nums[middle] < target && target <= nums[right]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return -1
}

module.exports = search
