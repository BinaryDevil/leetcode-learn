"""#739 Daily Temperatures
Keep unresolved day indexes in a monotonic decreasing-temperature stack.
Time: O(n) | Space: O(n)
"""


class Solution:
    def dailyTemperatures(self, temperatures):
        waits = [0] * len(temperatures)
        unresolved = []

        for day, temperature in enumerate(temperatures):
            while (
                unresolved
                and temperature > temperatures[unresolved[-1]]
            ):
                earlier_day = unresolved.pop()
                waits[earlier_day] = day - earlier_day
            unresolved.append(day)

        return waits
