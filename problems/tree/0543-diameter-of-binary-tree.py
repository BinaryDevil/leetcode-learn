"""#543 Diameter of Binary Tree
Return subtree height; at each node, left height plus right height is a path.
Time: O(n) | Space: O(h) call stack.
"""


class Solution:
    def diameterOfBinaryTree(self, root):
        diameter = 0

        def height(node):
            nonlocal diameter
            if node is None:
                return 0
            left_height = height(node.left)
            right_height = height(node.right)
            diameter = max(diameter, left_height + right_height)
            return 1 + max(left_height, right_height)

        height(root)
        return diameter
