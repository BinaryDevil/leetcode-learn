/**
 * #74 Search a 2D Matrix
 * Pattern: binary search over a virtual one-dimensional sorted array.
 * Map an index to row = floor(index / columns), column = index % columns.
 * Time: O(log(mn)) | Space: O(1)
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false

  const rows = matrix.length
  const columns = matrix[0].length
  let left = 0
  let right = rows * columns - 1

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2)
    const value = matrix[Math.floor(middle / columns)][middle % columns]

    if (value === target) return true
    if (value < target) left = middle + 1
    else right = middle - 1
  }

  return false
}

module.exports = searchMatrix
