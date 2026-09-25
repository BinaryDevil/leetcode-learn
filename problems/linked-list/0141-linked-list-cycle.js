/**
 * #141 Linked List Cycle
 * Pattern: Floyd's fast and slow pointers.
 * If a cycle exists, the pointers must meet inside it.
 * Time: O(n) | Space: O(1)
 *
 * @param {ListNode|null} head
 * @return {boolean}
 */
function hasCycle(head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }

  return false
}

module.exports = hasCycle
