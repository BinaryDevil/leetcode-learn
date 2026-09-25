"""#206 Reverse Linked List
Invariant: previous is reversed; current begins the remaining unreversed suffix.
Time: O(n) | Space: O(1)
"""


class Solution:
    def reverseList(self, head):
        previous = None
        current = head

        while current is not None:
            following = current.next
            current.next = previous
            previous = current
            current = following

        return previous
