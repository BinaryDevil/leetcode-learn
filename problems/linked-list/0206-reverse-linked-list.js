/**
 * #206 Reverse Linked List
 * Invariant: previous is the reversed prefix; current begins the unreversed suffix.
 * Time: O(n) | Space: O(1)
 *
 * @param {ListNode|null} head
 * @return {ListNode|null}
 */
function reverseList(head) {
  let previous = null
  let current = head

  while (current !== null) {
    const next = current.next
    current.next = previous
    previous = current
    current = next
  }

  return previous
}

module.exports = reverseList
