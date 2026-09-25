"""#104 Maximum Depth of Binary Tree
Return one plus the greater of the two subtree depths.
Time: O(n) | Space: O(h) call stack.
"""


class Solution:
    def maxDepth(self, root):
        if root is None:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
