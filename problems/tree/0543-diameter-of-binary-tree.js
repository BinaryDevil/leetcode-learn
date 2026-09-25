/**
 * #543 Diameter of Binary Tree
 * Each recursive call returns a subtree height; combine child heights at a node.
 * The diameter is measured in edges, so a through-node path is left + right.
 * Time: O(n) | Space: O(h) call stack
 *
 * @param {TreeNode|null} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  let diameter = 0

  function height(node) {
    if (node === null) return 0

    const leftHeight = height(node.left)
    const rightHeight = height(node.right)
    diameter = Math.max(diameter, leftHeight + rightHeight)
    return 1 + Math.max(leftHeight, rightHeight)
  }

  height(root)
  return diameter
}

module.exports = diameterOfBinaryTree
