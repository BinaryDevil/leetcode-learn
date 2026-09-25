"""#3 Longest Substring Without Repeating Characters
Invariant: the active window contains no repeated character.
Time: O(n) | Space: O(k), for distinct characters in the window.
"""


class Solution:
    def lengthOfLongestSubstring(self, s):
        last_seen = {}
        left = 0
        best = 0

        for right, character in enumerate(s):
            if character in last_seen:
                left = max(left, last_seen[character] + 1)
            last_seen[character] = right
            best = max(best, right - left + 1)

        return best
