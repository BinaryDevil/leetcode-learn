/**
 * #19 Remove Nth Node From End of List
 * Pattern: keep two pointers n nodes apart, with a dummy node before the head.
 * Time: O(n) | Space: O(1)
 *
 * @param {ListNode|null} head
 * @param {number} n
 * @return {ListNode|null}
 */
function removeNthFromEnd(head, n) {
  const dummy = { next: head }
  let fast = dummy
  let slow = dummy

  for (let i = 0; i < n; i += 1) fast = fast.next

  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next
  return dummy.next
}

module.exports = removeNthFromEnd
