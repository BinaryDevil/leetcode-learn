/**
 * #125 Valid Palindrome
 * Pattern: two pointers, skipping non-alphanumeric characters.
 * Invariant: the checked outer characters match after normalization.
 * Time: O(n) | Space: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    while (left < right && !/[a-z0-9]/i.test(s[left])) left += 1
    while (left < right && !/[a-z0-9]/i.test(s[right])) right -= 1

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
    left += 1
    right -= 1
  }

  return true
}

module.exports = isPalindrome
