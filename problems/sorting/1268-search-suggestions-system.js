/**
 * #1268 搜索推荐系统
 * 标签：排序、字符串
 * 状态：已完成
 *
 * 时间复杂度：O(p × n × s)
 * 空间复杂度：O(p × 3)
 */

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a.charCodeAt(i) !== b.charCodeAt(i)) {
        return a.charCodeAt(i) - b.charCodeAt(i)
      }
    }
  })

  let result = []
  for (let i = 0; i < searchWord.length; i++) {
    let str = searchWord.substring(0, i + 1)

    result.push(
      products
        .filter((item) => item.indexOf(str) === 0)
        .filter((_, index) => index < 3)
    )
  }

  return result
}

module.exports = suggestedProducts
