/**
 * #104 Maximum Depth of Binary Tree
 * Recursive contract: return the deepest path length from this node to a leaf.
 * Time: O(n) | Space: O(h) call stack
 *
 * @param {TreeNode|null} root
 * @return {number}
 */
function maxDepth(root) {
  if (root === null) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

module.exports = maxDepth
