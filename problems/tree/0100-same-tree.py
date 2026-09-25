"""#100 Same Tree
Compare node values and corresponding left and right subtrees recursively.
Time: O(n) | Space: O(h) call stack.
"""


class Solution:
    def isSameTree(self, p, q):
        if p is None or q is None:
            return p is q
        if p.val != q.val:
            return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
