# Array Patterns Review Guide

Use this guide to revisit the first study-plan category: arrays, strings, hash maps, and two pointers. The goal is not to memorize code. Before reading a solution, identify the pattern, state the invariant, and then implement it from scratch.

## Problem map

| # | Problem | Pattern to recognize | Core idea | Target complexity |
| --- | --- | --- | --- | --- |
| 1 | [Two Sum](../problems/array/1.twoSum.js) | Complement lookup | Save each number's index; for `x`, look for `target - x`. | O(n) time, O(n) space |
| 3 | [Longest Substring Without Repeating Characters](../problems/array/3.longest-substring-without-repeating-characters.js) | Sliding window | Keep a window with no repeated character; shrink it until it is valid. | O(n) time, O(min(n, alphabet)) space |
| 11 | [Container With Most Water](../problems/array/0011-container-with-most-water.js) | Opposing pointers | Evaluate both ends, then move the shorter wall inward. | O(n) time, O(1) space |
| 15 | [3Sum](../problems/array/0015-3sum.js) | Sort + two pointers | Fix one number, then solve a sorted two-sum problem for the rest. | O(n²) time |
| 49 | [Group Anagrams](../problems/array/49.groupAnagrams.js) | Hash by canonical key | Strings belong together when they have the same normalized representation. | O(total characters × log word length) time |
| 128 | [Longest Consecutive Sequence](../problems/array/128.longestconsecutive.js) | Hash set / sequence starts | Only count forward from numbers with no predecessor. | O(n) time, O(n) space |
| 238 | [Product of Array Except Self](../problems/array/238.ProductofArrayExceptSelf.js) | Prefix and suffix passes | Each result is the product before it times the product after it. | O(n) time, O(1) extra output space |
| 560 | [Subarray Sum Equals K](../problems/array/0560-subarray-sum-equals-k.js) | Prefix sum + frequency map | A previous prefix sum of `currentSum - k` creates a valid subarray. | O(n) time, O(n) space |

## Pattern playbook

### 1. Hash maps: look up information you need later

Use a map when a problem can be rewritten as “have I already seen the thing that completes the current item?”

- **Two Sum:** the needed value is `target - currentNumber`.
- **Subarray Sum Equals K:** the needed earlier prefix is `currentPrefix - k`.
- **Group Anagrams:** the key should be the same for every item in a group.

Checklist:

1. What value or key must have appeared earlier?
2. Do I need its existence, its index, or its frequency?
3. Should I check before inserting the current item, or after? For Two Sum, check first so one number cannot use itself twice. For 560, add matching frequencies before recording the current prefix.

### 2. Sliding windows: maintain a valid contiguous range

Use a sliding window when the answer is a contiguous subarray or substring and you can repair an invalid window by moving its left edge.

For problem 3, maintain this invariant:

> Every character in `s[left...right]` appears at most once.

When a duplicate appears, move `left` and remove characters until the invariant is true again. Update the best length only after the window is valid.

Warning: a regular sliding window does **not** solve 560, because negative values can make a sum go up or down unpredictably.

### 3. Two pointers: use sortedness or an elimination argument

Two pointers are not one technique; they need a reason for every pointer move.

- **11:** moving the taller wall cannot improve the limiting height and narrows the width, so move the shorter wall.
- **15:** after sorting, if three numbers sum too small, move `left` right; if too large, move `right` left.

For 3Sum, also skip duplicates:

- Skip repeated fixed values.
- After finding a triplet, move both pointers and skip repeated values on both sides.

### 4. Prefix information: make each position depend on what came before

- **238:** first pass records the product to the left of each index; second pass multiplies by the running product to the right.
- **560:** a prefix sum is the sum before or through an index. If `currentPrefix - earlierPrefix = k`, then `earlierPrefix = currentPrefix - k`.

Initialize 560's map with `0 → 1`. It represents the empty prefix before index 0, allowing subarrays that start at the first element to count.

If the needed prefix appears multiple times, count all of them: each occurrence ends before a different start position, producing a different subarray ending at the current index.

### 5. Sets: avoid repeated work by finding only valid starts

For 128, put all values in a set. A number starts a sequence only when `number - 1` is absent. Then walk forward from that start. This ensures every consecutive run is expanded once rather than repeatedly from its middle.

## Before writing code

Use this short routine for every revisit:

1. Restate the problem, including whether the answer must be contiguous and whether duplicates matter.
2. Name the pattern before coding.
3. Say the loop invariant aloud: what remains true after every iteration?
4. Identify the data structure's exact role: membership, index, count, or accumulated state.
5. Test one normal case and one boundary case by hand.

## Common mistakes to catch

| Pattern | Frequent mistake | Self-check |
| --- | --- | --- |
| Hash map | Storing before checking and accidentally using the same item twice | Does the current element get paired with itself? |
| Sliding window | Updating the answer while the window is invalid | Is the invariant true when `best` changes? |
| Two pointers | Moving a pointer without an elimination argument | Which candidates have I proved cannot be optimal? |
| 3Sum | Returning duplicate triplets | Did I skip duplicate fixed values and pointer values? |
| Prefix sums | Forgetting the empty prefix | Does a valid range starting at index 0 work? |
| Prefix frequency map | Using a set rather than counts | Can the same prefix occur more than once? |
| In-place arrays | Ignoring the required mutation/return convention | What does the caller need after the function returns? |

## Review schedule

For a problem you needed help with, redo it without notes after **1 day, 7 days, and 30 days**. For each attempt, record only:

- Did I identify the pattern without a hint?
- Did I state a correct invariant or pointer-movement reason?
- Did I finish a correct solution in 20 minutes?
- What one bug or hesitation should I remember next time?

Suggested mixed review sets:

| Session | Problems | What it tests |
| --- | --- | --- |
| A | 1, 49, 128 | Choosing the right hash key / set rule |
| B | 3, 11, 15 | Window logic and two-pointer movement |
| C | 238, 560 | Prefix state and boundary initialization |
| D | 15, 560 | Handling duplicates and counting multiple valid answers |

## Exit criteria for this category

You are ready to move on when you can solve each problem from a blank editor, explain why every pointer or map update is safe, and correctly handle at least one edge case for each. Keep the ones that required a hint in your 1–7–30 day review rotation.
