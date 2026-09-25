/**
 * #155 Min Stack
 * Keep the minimum at each depth so getMin is constant time.
 * Each pushed value has a corresponding minimum-so-far entry.
 * Time: O(1) per operation | Space: O(n)
 */
class MinStack {
  constructor() {
    this.values = []
    this.minimums = []
  }

  push(value) {
    this.values.push(value)
    const currentMinimum = this.minimums[this.minimums.length - 1]
    this.minimums.push(
      currentMinimum === undefined ? value : Math.min(value, currentMinimum),
    )
  }

  pop() {
    this.minimums.pop()
    return this.values.pop()
  }

  top() {
    return this.values[this.values.length - 1]
  }

  getMin() {
    return this.minimums[this.minimums.length - 1]
  }
}

module.exports = MinStack
