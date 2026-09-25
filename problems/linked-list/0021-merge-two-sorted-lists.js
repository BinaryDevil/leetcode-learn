/**
 * #21 Merge Two Sorted Lists
 * Pattern: dummy head plus a pointer to the merged tail.
 * Time: O(n + m) | Space: O(1) extra
 *
 * @param {ListNode|null} list1
 * @param {ListNode|null} list2
 * @return {ListNode|null}
 */
function mergeTwoLists(list1, list2) {
  const dummy = { next: null }
  let tail = dummy
  let first = list1
  let second = list2

  while (first !== null && second !== null) {
    if (first.val <= second.val) {
      tail.next = first
      first = first.next
    } else {
      tail.next = second
      second = second.next
    }
    tail = tail.next
  }

  tail.next = first ?? second
  return dummy.next
}

module.exports = mergeTwoLists
