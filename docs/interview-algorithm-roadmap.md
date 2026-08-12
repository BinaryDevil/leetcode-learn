# 求职算法路线图

这份路线图面向多数前端、后端与通用软件工程岗位的技术面试。目标不是背完题库，而是能识别题型、说清思路，并在有限时间内写出正确代码。

## 建议节奏

- 每天 1～2 题：先独立思考 20～30 分钟，再看提示或题解。
- 每题记录：题型、核心思路、复杂度、一个容易错的边界。
- 对没独立写出的题，在第 1 天、第 7 天、第 30 天各重做一次。
- 优先完成“核心题”，再按目标岗位补充“进阶题”。

## 学习优先级

| 优先级 | 类别 | 面试中的作用 |
| --- | --- | --- |
| P0 | 数组、哈希、双指针 | 最常见，训练基础代码能力 |
| P0 | 链表、栈、队列 | 高频数据结构操作 |
| P0 | 二分、滑动窗口 | 固定套路，投入产出比很高 |
| P0 | 树与递归 | 大量公司必考 |
| P0 | 动态规划、回溯 | 考察状态设计与搜索能力 |
| P1 | 堆、贪心、区间 | 常见中等题核心工具 |
| P1 | 图论 | BFS/DFS、拓扑排序、并查集足够覆盖大多数面试 |
| P2 | Trie、单调栈、位运算 | 用于拉开差距的专项题型 |

## 1. 数组、字符串、哈希与双指针（P0）

重点：哈希表去重/计数、原地修改、左右指针收缩、前缀和。

| 题号 | 题目 | 关键模式 |
| --- | --- | --- |
| 1 | [两数之和](https://leetcode.com/problems/two-sum/) | 哈希表查补数 |
| 49 | [字母异位词分组](https://leetcode.com/problems/group-anagrams/) | 哈希键设计 |
| 128 | [最长连续序列](https://leetcode.com/problems/longest-consecutive-sequence/) | 哈希集合 |
| 238 | [除自身以外数组的乘积](https://leetcode.com/problems/product-of-array-except-self/) | 前后缀 |
| 3 | [无重复字符的最长子串](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 滑动窗口 |
| 11 | [盛最多水的容器](https://leetcode.com/problems/container-with-most-water/) | 对撞双指针 |
| 15 | [三数之和](https://leetcode.com/problems/3sum/) | 排序 + 双指针 |
| 560 | [和为 K 的子数组](https://leetcode.com/problems/subarray-sum-equals-k/) | 前缀和 + 哈希 |

## 2. 链表、栈与队列（P0）

重点：虚拟头节点、快慢指针、链表反转、栈保存“尚未匹配”的状态。

| 题号 | 题目 | 关键模式 |
| --- | --- | --- |
| 206 | [反转链表](https://leetcode.com/problems/reverse-linked-list/) | 指针迭代/递归 |
| 21 | [合并两个有序链表](https://leetcode.com/problems/merge-two-sorted-lists/) | 哑节点 |
| 141 | [环形链表](https://leetcode.com/problems/linked-list-cycle/) | 快慢指针 |
| 19 | [删除链表的倒数第 N 个结点](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | 双指针间距 |
| 143 | [重排链表](https://leetcode.com/problems/reorder-list/) | 找中点 + 反转 + 合并 |
| 20 | [有效的括号](https://leetcode.com/problems/valid-parentheses/) | 栈匹配 |
| 155 | [最小栈](https://leetcode.com/problems/min-stack/) | 辅助状态 |
| 739 | [每日温度](https://leetcode.com/problems/daily-temperatures/) | 单调栈 |

## 3. 二分查找与滑动窗口（P0）

重点：明确搜索区间与循环不变量；二分答案时判断条件必须单调。

| 题号 | 题目 | 关键模式 |
| --- | --- | --- |
| 704 | [二分查找](https://leetcode.com/problems/binary-search/) | 基础模板 |
| 34 | [在排序数组中查找元素的第一个和最后一个位置](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | 左右边界 |
| 33 | [搜索旋转排序数组](https://leetcode.com/problems/search-in-rotated-sorted-array/) | 二分分段判断 |
| 74 | [搜索二维矩阵](https://leetcode.com/problems/search-a-2d-matrix/) | 二分查找 |
| 875 | [爱吃香蕉的珂珂](https://leetcode.com/problems/koko-eating-bananas/) | 二分答案 |
| 76 | [最小覆盖子串](https://leetcode.com/problems/minimum-window-substring/) | 可变窗口 |
| 438 | [找到字符串中所有字母异位词](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | 定长窗口 |

## 4. 二叉树与递归（P0）

重点：先确定递归函数的含义，再定义终止条件与左右子树如何组合；层序遍历用队列。

| 题号 | 题目 | 关键模式 |
| --- | --- | --- |
| 104 | [二叉树的最大深度](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | 基础 DFS |
| 102 | [二叉树的层序遍历](https://leetcode.com/problems/binary-tree-level-order-traversal/) | BFS 队列 |
| 226 | [翻转二叉树](https://leetcode.com/problems/invert-binary-tree/) | 递归改造 |
| 98 | [验证二叉搜索树](https://leetcode.com/problems/validate-binary-search-tree/) | 上下界 / 中序 |
| 236 | [二叉树的最近公共祖先](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | 后序递归 |
| 105 | [从前序与中序遍历序列构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | 递归划分 |
| 124 | [二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | 树形 DP |

## 5. 动态规划与回溯（P0）

重点：DP 先写状态含义、转移、初值和遍历顺序；回溯用“选择—递归—撤销选择”的固定骨架。

| 题号 | 题目 | 关键模式 |
| --- | --- | --- |
| 70 | [爬楼梯](https://leetcode.com/problems/climbing-stairs/) | 一维 DP 入门 |
| 198 | [打家劫舍](https://leetcode.com/problems/house-robber/) | 选或不选 |
| 322 | [零钱兑换](https://leetcode.com/problems/coin-change/) | 完全背包 |
| 300 | [最长递增子序列](https://leetcode.com/problems/longest-increasing-subsequence/) | DP / 二分优化 |
| 72 | [编辑距离](https://leetcode.com/problems/edit-distance/) | 双序列 DP |
| 46 | [全排列](https://leetcode.com/problems/permutations/) | 回溯模板 |
| 78 | [子集](https://leetcode.com/problems/subsets/) | 枚举选择 |
| 39 | [组合总和](https://leetcode.com/problems/combination-sum/) | 剪枝 |

## 6. 堆、贪心与区间（P1）

重点：堆维护“当前最优的少量元素”；区间题先排序；贪心必须能解释局部选择为何安全。

| 题号 | 题目 | 关键模式 |
| --- | --- | --- |
| 215 | [数组中的第 K 个最大元素](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 小顶堆 / 快速选择 |
| 347 | [前 K 个高频元素](https://leetcode.com/problems/top-k-frequent-elements/) | 哈希 + 堆 |
| 23 | [合并 K 个升序链表](https://leetcode.com/problems/merge-k-sorted-lists/) | 多路归并 |
| 56 | [合并区间](https://leetcode.com/problems/merge-intervals/) | 排序扫描 |
| 435 | [无重叠区间](https://leetcode.com/problems/non-overlapping-intervals/) | 区间贪心 |
| 55 | [跳跃游戏](https://leetcode.com/problems/jump-game/) | 最远可达位置 |

## 7. 图论（P1）

重点：邻接表建图；连通性优先想到 DFS/BFS；依赖关系用拓扑排序；动态连通性用并查集。

| 题号 | 题目 | 关键模式 |
| --- | --- | --- |
| 200 | [岛屿数量](https://leetcode.com/problems/number-of-islands/) | 网格 DFS/BFS |
| 994 | [腐烂的橘子](https://leetcode.com/problems/rotting-oranges/) | 多源 BFS |
| 207 | [课程表](https://leetcode.com/problems/course-schedule/) | 拓扑排序 |
| 133 | [克隆图](https://leetcode.com/problems/clone-graph/) | 图遍历 + 哈希 |
| 547 | [省份数量](https://leetcode.com/problems/number-of-provinces/) | 并查集 / DFS |
| 127 | [单词接龙](https://leetcode.com/problems/word-ladder/) | 最短路 BFS |

## 8. 专项加分题（P2）

在完成 P0/P1 后按需学习。这些题型出现频率稍低，但理解后很有辨识度。

| 题号 | 题目 | 关键模式 |
| --- | --- | --- |
| 84 | [柱状图中最大的矩形](https://leetcode.com/problems/largest-rectangle-in-histogram/) | 单调栈 |
| 42 | [接雨水](https://leetcode.com/problems/trapping-rain-water/) | 单调栈 / 双指针 |
| 208 | [实现 Trie（前缀树）](https://leetcode.com/problems/implement-trie-prefix-tree/) | 前缀树 |
| 295 | [数据流的中位数](https://leetcode.com/problems/find-median-from-data-stream/) | 对顶堆 |
| 136 | [只出现一次的数字](https://leetcode.com/problems/single-number/) | 异或 |
| 190 | [颠倒二进制位](https://leetcode.com/problems/reverse-bits/) | 位运算 |

## 面试前检查清单

1. 能否在 5 分钟内判断题目所属模式？
2. 能否先说清楚暴力解法，再优化到目标复杂度？
3. 能否主动覆盖空数组、单元素、重复值、负数与边界下标？
4. 能否在写完后用 1～2 个例子手动模拟？
5. 能否准确说明时间复杂度和空间复杂度？

> 建议先完成全部 P0 核心题，再开始投递或参加模拟面试；每类至少挑 2 题隔周重写，效果比盲目扩大题量更好。
