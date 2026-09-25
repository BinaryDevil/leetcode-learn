"""#438 Find All Anagrams in a String
Keep a fixed-length window and compare its character frequencies to p.
Time: O(26n) | Space: O(1) for the fixed lowercase alphabet.
"""

from collections import Counter


class Solution:
    def findAnagrams(self, s, p):
        if not p or len(p) > len(s):
            return []

        needed = Counter(p)
        window = Counter()
        starts = []
        width = len(p)

        for right, character in enumerate(s):
            window[character] += 1
            if right >= width:
                outgoing = s[right - width]
                window[outgoing] -= 1
                if window[outgoing] == 0:
                    del window[outgoing]

            if right >= width - 1 and window == needed:
                starts.append(right - width + 1)

        return starts
