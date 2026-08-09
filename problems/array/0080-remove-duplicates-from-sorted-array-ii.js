/**
 * #80 删除有序数组中的重复项 II
 * 标签：数组、双指针
 * 状态：已完成
 *
 * 时间复杂度：O(n²)（splice 可能移动元素）
 * 空间复杂度：O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var i = 0
  var num
  var count
  while (nums[i] !== undefined) {
    if (nums[i] !== num) {
      num = nums[i]
      count = 1
      i++
    } else {
      if (count < 2) {
        count++
        i++
      } else {
        nums.splice(i, 1)
      }
    }
  }

  return nums.length
}

module.exports = removeDuplicates
