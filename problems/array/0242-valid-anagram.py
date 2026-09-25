"""#242 Valid Anagram
Equal strings have the same frequency for every character.
Time: O(n) | Space: O(k), for distinct characters.
"""

from collections import Counter


class Solution:
    def isAnagram(self, s, t):
        return Counter(s) == Counter(t)
