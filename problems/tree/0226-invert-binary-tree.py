"""#226 Invert Binary Tree
Swap both children at every node while recursively inverting the subtrees.
Time: O(n) | Space: O(h) call stack.
"""


class Solution:
    def invertTree(self, root):
        if root is None:
            return None
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root
