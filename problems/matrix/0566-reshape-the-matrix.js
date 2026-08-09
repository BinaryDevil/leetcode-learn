/**
 * #566 重塑矩阵
 * 标签：矩阵
 * 状态：已完成
 *
 * 时间复杂度：O(mn)
 * 空间复杂度：O(rc)
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (nums.length > 0) {
    var oRows = nums.length
    var oCols = nums[0].length
    if (oRows * oCols === r * c) {
      var result = [[]]
      for (var i = 0; i < oRows; i++) {
        for (var j = 0; j < oCols; j++) {
          if (result[result.length - 1].length === c) {
            result.push([nums[i][j]])
          } else {
            result[result.length - 1].push(nums[i][j])
          }
        }
      }
      return result
    } else {
      return nums
    }
  } else {
    return nums
  }
}

module.exports = matrixReshape
