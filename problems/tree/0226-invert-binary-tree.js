/**
 * #226 Invert Binary Tree
 * Pattern: recursively swap the two children at every node.
 * Time: O(n) | Space: O(h) call stack
 *
 * @param {TreeNode|null} root
 * @return {TreeNode|null}
 */
function invertTree(root) {
  if (root === null) return null

  const originalLeft = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(originalLeft)
  return root
}

module.exports = invertTree
