# LeetCode 学习记录

这是一个用于长期记录 LeetCode 刷题过程的 JavaScript 和 Python 仓库。题目按算法主题归档，每道已完成题目都保留两种语言的独立解法，便于复盘与持续补充。

## 目录结构

```text
.
├── problems/              # 已完成或进行中的题解
│   ├── array/
│   ├── binary-search/
│   ├── dynamic-programming/
│   ├── graph/
│   ├── heap/
│   ├── linked-list/
│   ├── matrix/
│   ├── math/
│   ├── sorting/
│   ├── tree/
│   └── bit-manipulation/
├── templates/             # 新题模板
├── docs/                  # 学习计划与复盘笔记
├── package.json           # 本地校验命令
└── README.md
```

## 题目索引

| 编号 | 题目（JavaScript） | Python | 主题 | 状态 |
| --- | --- | --- | --- | --- |
| 1 | [两数之和](problems/array/1.twoSum.js) | [Python](problems/array/1.twoSum.py) | 数组 / 哈希表 | 已完成 |
| 3 | [无重复字符的最长子串](problems/array/3.longest-substring-without-repeating-characters.js) | [Python](problems/array/3.longest-substring-without-repeating-characters.py) | 字符串 / 滑动窗口 | 已完成 |
| 11 | [盛最多水的容器](problems/array/0011-container-with-most-water.js) | [Python](problems/array/0011-container-with-most-water.py) | 数组 / 双指针 | 已完成 |
| 15 | [三数之和](problems/array/0015-3sum.js) | [Python](problems/array/0015-3sum.py) | 数组 / 排序 / 双指针 | 已完成 |
| 19 | [删除链表的倒数第 N 个结点](problems/linked-list/0019-remove-nth-node-from-end-of-list.js) | [Python](problems/linked-list/0019-remove-nth-node-from-end-of-list.py) | 链表 / 双指针 | 已完成 |
| 20 | [有效的括号](problems/linked-list/0020-valid-parentheses.js) | [Python](problems/linked-list/0020-valid-parentheses.py) | 栈 | 已完成 |
| 21 | [合并两个有序链表](problems/linked-list/0021-merge-two-sorted-lists.js) | [Python](problems/linked-list/0021-merge-two-sorted-lists.py) | 链表 | 已完成 |
| 33 | [搜索旋转排序数组](problems/binary-search/0033-search-in-rotated-sorted-array.js) | [Python](problems/binary-search/0033-search-in-rotated-sorted-array.py) | 二分查找 | 已完成 |
| 34 | [在排序数组中查找元素的第一个和最后一个位置](problems/binary-search/0034-find-first-and-last-position-in-sorted-array.js) | [Python](problems/binary-search/0034-find-first-and-last-position-in-sorted-array.py) | 二分查找 | 已完成 |
| 49 | [字母异位词分组](problems/array/49.groupAnagrams.js) | [Python](problems/array/49.groupAnagrams.py) | 数组 / 哈希表 | 已完成 |
| 53 | [最大子数组和](problems/array/0053-maximum-subarray.js) | [Python](problems/array/0053-maximum-subarray.py) | 数组 / Kadane 算法 | 已完成 |
| 74 | [搜索二维矩阵](problems/binary-search/0074-search-a-2d-matrix.js) | [Python](problems/binary-search/0074-search-a-2d-matrix.py) | 矩阵 / 二分查找 | 已完成 |
| 80 | [删除有序数组中的重复项 II](problems/array/80.remove-duplicates-from-sorted-array-ii.js) | [Python](problems/array/80.remove-duplicates-from-sorted-array-ii.py) | 数组 / 双指针 | 已完成 |
| 100 | [相同的树](problems/tree/0100-same-tree.js) | [Python](problems/tree/0100-same-tree.py) | 二叉树 / 递归 | 已完成 |
| 102 | [二叉树的层序遍历](problems/tree/0102-binary-tree-level-order-traversal.js) | [Python](problems/tree/0102-binary-tree-level-order-traversal.py) | 二叉树 / BFS | 已完成 |
| 104 | [二叉树的最大深度](problems/tree/0104-maximum-depth-of-binary-tree.js) | [Python](problems/tree/0104-maximum-depth-of-binary-tree.py) | 二叉树 / DFS | 已完成 |
| 121 | [买卖股票的最佳时机](problems/array/0121-best-time-to-buy-and-sell-stock.js) | [Python](problems/array/0121-best-time-to-buy-and-sell-stock.py) | 数组 / 一次遍历 | 已完成 |
| 125 | [验证回文串](problems/array/0125-valid-palindrome.js) | [Python](problems/array/0125-valid-palindrome.py) | 字符串 / 双指针 | 已完成 |
| 128 | [最长连续序列](problems/array/128.longestconsecutive.js) | [Python](problems/array/128.longestconsecutive.py) | 数组 / 哈希集合 | 已完成 |
| 141 | [环形链表](problems/linked-list/0141-linked-list-cycle.js) | [Python](problems/linked-list/0141-linked-list-cycle.py) | 链表 / 快慢指针 | 已完成 |
| 143 | [重排链表](problems/linked-list/0143-reorder-list.js) | [Python](problems/linked-list/0143-reorder-list.py) | 链表 / 多步指针变换 | 已完成 |
| 155 | [最小栈](problems/linked-list/0155-min-stack.js) | [Python](problems/linked-list/0155-min-stack.py) | 栈 / 辅助状态 | 已完成 |
| 190 | [颠倒二进制位](problems/bit-manipulation/0190-reverse-bits.js) | — | 位运算 | 待复盘 |
| 200 | [岛屿数量](problems/graph/0200-number-of-islands.js) | [Python](problems/graph/0200-number-of-islands.py) | 图 / 网格 DFS | 已完成 |
| 206 | [反转链表](problems/linked-list/0206-reverse-linked-list.js) | [Python](problems/linked-list/0206-reverse-linked-list.py) | 链表 / 指针迭代 | 已完成 |
| 215 | [数组中的第 K 个最大元素](problems/heap/0215-kth-largest-element-in-an-array.js) | [Python](problems/heap/0215-kth-largest-element-in-an-array.py) | 堆 / Top K | 已完成 |
| 226 | [翻转二叉树](problems/tree/0226-invert-binary-tree.js) | [Python](problems/tree/0226-invert-binary-tree.py) | 二叉树 / 递归 | 已完成 |
| 238 | [除自身以外数组的乘积](problems/array/238.ProductofArrayExceptSelf.js) | [Python](problems/array/238.ProductofArrayExceptSelf.py) | 数组 / 前后缀 | 已完成 |
| 242 | [有效的字母异位词](problems/array/0242-valid-anagram.js) | [Python](problems/array/0242-valid-anagram.py) | 字符串 / 频次统计 | 已完成 |
| 347 | [前 K 个高频元素](problems/heap/0347-top-k-frequent-elements.js) | [Python](problems/heap/0347-top-k-frequent-elements.py) | 哈希表 / 堆 | 已完成 |
| 438 | [找到字符串中所有字母异位词](problems/array/0438-find-all-anagrams-in-a-string.js) | [Python](problems/array/0438-find-all-anagrams-in-a-string.py) | 字符串 / 定长滑动窗口 | 已完成 |
| 474 | [一和零](problems/dynamic-programming/0474-ones-and-zeroes.js) | [Python](problems/dynamic-programming/0474-ones-and-zeroes.py) | 动态规划 | 已完成 |
| 543 | [二叉树的直径](problems/tree/0543-diameter-of-binary-tree.js) | [Python](problems/tree/0543-diameter-of-binary-tree.py) | 二叉树 / DFS | 已完成 |
| 560 | [和为 K 的子数组](problems/array/0560-subarray-sum-equals-k.js) | [Python](problems/array/0560-subarray-sum-equals-k.py) | 数组 / 前缀和 / 哈希表 | 已完成 |
| 566 | [重塑矩阵](problems/matrix/0566-reshape-the-matrix.js) | [Python](problems/matrix/0566-reshape-the-matrix.py) | 矩阵 | 已完成 |
| 704 | [二分查找](problems/binary-search/0704-binary-search.js) | [Python](problems/binary-search/0704-binary-search.py) | 二分查找 | 已完成 |
| 739 | [每日温度](problems/linked-list/0739-daily-temperatures.js) | [Python](problems/linked-list/0739-daily-temperatures.py) | 单调栈 | 已完成 |
| 875 | [爱吃香蕉的珂珂](problems/binary-search/0875-koko-eating-bananas.js) | [Python](problems/binary-search/0875-koko-eating-bananas.py) | 二分答案 | 已完成 |
| 973 | [最接近原点的 K 个点](problems/heap/0973-k-closest-points-to-origin.js) | [Python](problems/heap/0973-k-closest-points-to-origin.py) | 堆 / Top K | 已完成 |
| 1006 | [笨阶乘](problems/math/1006-clumsy-factorial.js) | [Python](problems/math/1006-clumsy-factorial.py) | 数学 / 栈 | 已完成 |
| 1268 | [搜索推荐系统](problems/sorting/1268-search-suggestions-system.js) | [Python](problems/sorting/1268-search-suggestions-system.py) | 排序 | 已完成 |

## 使用方式

JavaScript 解法可以从 `templates/problem.js` 复制到对应主题目录；Python 解法沿用同题号和英文题名并保存为 `.py`。每道题建议写明解题思路、复杂度和状态；完成后同步更新上面的索引。

```bash
npm test
```

该命令会检查所有题解文件是否能被 Node.js 解析。它不依赖第三方包。

## 学习资料

- [求职算法路线图](docs/interview-algorithm-roadmap.md)：按面试实用度排列的题型重点与推荐题单。
- [学习计划](docs/study-plan.md)：日常刷题和复盘节奏。
- [数组模式复习指南](docs/array-patterns-review-guide.md)：已完成数组、字符串、哈希与双指针题目的模式总结与复盘清单。
