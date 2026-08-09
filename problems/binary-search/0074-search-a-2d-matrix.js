/**
 * #74 搜索二维矩阵
 * 标签：二分查找、矩阵
 * 状态：已完成
 *
 * 思路：先定位目标可能所在的行，再在该行中查找。
 * 时间复杂度：O(m + n)
 * 空间复杂度：O(1)
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length > 0) {
    const r = matrix.length
    const c = matrix[0].length

    if (matrix[r - 1][c - 1] < target || matrix[0][0] > target) {
      return false
    } else {
      for (var i = 0; i < r; i++) {
        if (matrix[i][c - 1] >= target) {
          break
        }
      }

      return matrix[i].indexOf(target) > -1
    }
  } else {
    return false
  }
}

module.exports = searchMatrix
