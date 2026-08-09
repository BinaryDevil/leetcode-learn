/**
 * #1 两数之和
 *
 * 链接：https://leetcode.com/problems/two-sum/
 * 标签：数组、哈希表
 * 难度：Easy
 * 状态：已完成
 *
 * ## 初始思路的复盘
 *
 * 只保存一个候选下标虽然能做到 O(n) 时间和 O(1) 空间，但并不正确：
 *
 * - 可能需要和任意一个之前出现的数字配对，不能只保留一个下标。
 * - `nums[i] > target` 不能跳过；负数也可能构成答案，例如 10 + (-1) = 9。
 * - 找到答案后必须立刻返回，否则后续遍历会覆盖结果。
 * - 临时变量应定义在函数内，避免多次调用时保留上一次的状态。
 *
 * ## 最优思路：一次遍历 + 哈希表
 *
 * 遍历到 `nums[i]` 时，所需的另一个数是 `target - nums[i]`。
 * 用 `seen` 记录“之前出现的数字 -> 它的下标”：
 *
 * 1. 先检查所需数字是否已经在 `seen` 中。
 * 2. 若存在，它和当前数字正好组成答案，返回两个下标。
 * 3. 若不存在，再记录当前数字，继续遍历。
 *
 * 关键点：先查找、后写入，所以同一个元素不会被使用两次。
 *
 * 时间复杂度：O(n)，每个元素最多访问一次，Map 查询/写入平均为 O(1)。
 * 空间复杂度：O(n)，最坏情况下 Map 保存 n 个数字。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const seen = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (seen.has(complement)) {
      return [seen.get(complement), i]
    }

    seen.set(nums[i], i)
  }

  return []
}

module.exports = twoSum
