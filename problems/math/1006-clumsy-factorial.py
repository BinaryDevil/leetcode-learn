"""#1006 Clumsy Factorial
Apply multiply/divide immediately and keep addition/subtraction terms in a stack.
Time: O(n) | Space: O(n)
"""


class Solution:
    def clumsy(self, n):
        stack = [n]
        operation = 0

        for number in range(n - 1, 0, -1):
            if operation % 4 == 0:
                stack[-1] *= number
            elif operation % 4 == 1:
                # Python // floors; use magnitude so negative division truncates toward zero.
                quotient = abs(stack[-1]) // number
                stack[-1] = -quotient if stack[-1] < 0 else quotient
            elif operation % 4 == 2:
                stack.append(number)
            else:
                stack.append(-number)
            operation += 1

        return sum(stack)
