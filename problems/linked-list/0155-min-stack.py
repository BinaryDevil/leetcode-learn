"""#155 Min Stack
Store the minimum at every stack depth for constant-time getMin.
All operations: O(1) | Space: O(n)
"""


class MinStack:
    def __init__(self):
        self.values = []
        self.minimums = []

    def push(self, val):
        self.values.append(val)
        current_minimum = self.minimums[-1] if self.minimums else val
        self.minimums.append(min(val, current_minimum))

    def pop(self):
        self.minimums.pop()
        self.values.pop()

    def top(self):
        return self.values[-1]

    def getMin(self):
        return self.minimums[-1]
