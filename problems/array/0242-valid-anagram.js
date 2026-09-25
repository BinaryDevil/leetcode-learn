/**
 * #242 Valid Anagram
 * Pattern: frequency counting; every character count must cancel to zero.
 * Time: O(n) | Space: O(k), for k distinct characters.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false

  const counts = new Map()

  for (const character of s) {
    counts.set(character, (counts.get(character) ?? 0) + 1)
  }

  for (const character of t) {
    const count = counts.get(character)
    if (count === undefined) return false
    if (count === 1) counts.delete(character)
    else counts.set(character, count - 1)
  }

  return counts.size === 0
}

module.exports = isAnagram
