/**
 * #20 Valid Parentheses
 * Pattern: stack stores opening brackets that still need a matching close.
 * Time: O(n) | Space: O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const openingFor = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])
  const stack = []

  for (const character of s) {
    if (openingFor.has(character)) {
      if (stack.pop() !== openingFor.get(character)) return false
    } else {
      stack.push(character)
    }
  }

  return stack.length === 0
}

module.exports = isValid
