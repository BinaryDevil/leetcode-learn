"""#20 Valid Parentheses
The stack holds opening brackets whose matching close has not arrived.
Time: O(n) | Space: O(n)
"""


class Solution:
    def isValid(self, s):
        opening_for = {")": "(", "]": "[", "}": "{"}
        stack = []

        for character in s:
            if character in opening_for:
                if not stack or stack.pop() != opening_for[character]:
                    return False
            else:
                stack.append(character)

        return not stack
