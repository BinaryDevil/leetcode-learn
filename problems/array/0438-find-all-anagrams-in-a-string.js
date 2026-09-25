/**
 * #438 Find All Anagrams in a String
 * Pattern: fixed-size sliding window with character frequencies.
 * Compare the window only after it reaches the pattern length.
 * Time: O(26n), which is O(n) for the fixed lowercase alphabet | Space: O(1)
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  if (p.length > s.length) return []

  const base = 'a'.charCodeAt(0)
  const needed = Array(26).fill(0)
  const window = Array(26).fill(0)
  const result = []

  for (const character of p) {
    needed[character.charCodeAt(0) - base] += 1
  }

  for (let right = 0; right < s.length; right += 1) {
    window[s.charCodeAt(right) - base] += 1

    if (right >= p.length) {
      window[s.charCodeAt(right - p.length) - base] -= 1
    }

    if (right >= p.length - 1) {
      let matches = true
      for (let i = 0; i < 26; i += 1) {
        if (window[i] !== needed[i]) {
          matches = false
          break
        }
      }
      if (matches) result.push(right - p.length + 1)
    }
  }

  return result
}

module.exports = findAnagrams
