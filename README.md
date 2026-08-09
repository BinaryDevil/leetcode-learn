# LeetCode 学习记录

这是一个用于长期记录 LeetCode 刷题过程的 JavaScript 仓库。题目按算法主题归档，保留每道题独立的解法文件，便于复盘与持续补充。

## 目录结构

```text
.
├── problems/              # 已完成或进行中的题解
│   ├── array/
│   ├── binary-search/
│   ├── dynamic-programming/
│   ├── matrix/
│   ├── math/
│   ├── sorting/
│   └── bit-manipulation/
├── templates/             # 新题模板
├── docs/                  # 学习计划与复盘笔记
├── package.json           # 本地校验命令
└── README.md
```

## 题目索引

| 编号 | 题目 | 主题 | 状态 |
| --- | --- | --- | --- |
| 74 | [搜索二维矩阵](problems/binary-search/0074-search-a-2d-matrix.js) | 二分查找 | 已完成 |
| 80 | [删除有序数组中的重复项 II](problems/array/0080-remove-duplicates-from-sorted-array-ii.js) | 数组 / 双指针 | 已完成 |
| 190 | [颠倒二进制位](problems/bit-manipulation/0190-reverse-bits.js) | 位运算 | 待复盘 |
| 474 | [一和零](problems/dynamic-programming/0474-ones-and-zeroes.js) | 动态规划 | 已完成 |
| 566 | [重塑矩阵](problems/matrix/0566-reshape-the-matrix.js) | 矩阵 | 已完成 |
| 1006 | [笨阶乘](problems/math/1006-clumsy-factorial.js) | 数学 / 栈 | 已完成 |
| 1268 | [搜索推荐系统](problems/sorting/1268-search-suggestions-system.js) | 排序 | 已完成 |

## 使用方式

新题可以从 `templates/problem.js` 复制到对应主题目录，文件名采用 `四位题号-英文题名.js`。每道题建议写明解题思路、复杂度和状态；完成后同步更新上面的索引。

```bash
npm test
```

该命令会检查所有题解文件是否能被 Node.js 解析。它不依赖第三方包。
