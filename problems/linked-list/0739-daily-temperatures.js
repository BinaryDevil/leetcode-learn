/**
 * #739 Daily Temperatures
 * Pattern: monotonic decreasing stack of unresolved day indexes.
 * When a warmer day arrives, it resolves each cooler index at the top.
 * Time: O(n) | Space: O(n)
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const waits = Array(temperatures.length).fill(0)
  const unresolved = []

  for (let day = 0; day < temperatures.length; day += 1) {
    while (
      unresolved.length > 0 &&
      temperatures[day] > temperatures[unresolved[unresolved.length - 1]]
    ) {
      const earlierDay = unresolved.pop()
      waits[earlierDay] = day - earlierDay
    }
    unresolved.push(day)
  }

  return waits
}

module.exports = dailyTemperatures
