"""#19 Remove Nth Node From End of List
Keep two pointers n links apart; a dummy node also handles removing the head.
Time: O(n) | Space: O(1)
"""


class Solution:
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(0)
        dummy.next = head
        fast = slow = dummy

        for _ in range(n):
            fast = fast.next

        while fast.next is not None:
            fast = fast.next
            slow = slow.next

        slow.next = slow.next.next
        return dummy.next
