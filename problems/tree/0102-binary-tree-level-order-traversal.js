/**
 * #102 Binary Tree Level Order Traversal
 * Pattern: BFS; capture the queue end before processing each level.
 * Time: O(n) | Space: O(n)
 *
 * @param {TreeNode|null} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (root === null) return []

  const result = []
  const queue = [root]
  let head = 0

  while (head < queue.length) {
    const levelEnd = queue.length
    const level = []

    while (head < levelEnd) {
      const node = queue[head]
      head += 1
      level.push(node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }

    result.push(level)
  }

  return result
}

module.exports = levelOrder
