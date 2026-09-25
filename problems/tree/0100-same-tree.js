/**
 * #100 Same Tree
 * Pattern: compare matching positions in both trees recursively.
 * Time: O(n) | Space: O(h) call stack
 *
 * @param {TreeNode|null} p
 * @param {TreeNode|null} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  if (p === null || q === null) return p === q
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

module.exports = isSameTree
