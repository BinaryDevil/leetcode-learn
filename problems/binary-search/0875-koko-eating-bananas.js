/**
 * #875 Koko Eating Bananas
 * Pattern: binary search for the first speed that satisfies the time limit.
 * Feasibility is monotonic: if speed works, every faster speed also works.
 * Time: O(n log(max(piles))) | Space: O(1)
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  let left = 1
  let right = Math.max(...piles)

  while (left < right) {
    const speed = left + Math.floor((right - left) / 2)
    let hours = 0

    for (const pile of piles) {
      hours += Math.ceil(pile / speed)
      if (hours > h) break
    }

    if (hours <= h) right = speed
    else left = speed + 1
  }

  return left
}

module.exports = minEatingSpeed
