"""#200 Number of Islands
Flood-fill each connected land component once and mark cells when discovered.
Time: O(rows * columns) | Space: O(rows * columns) worst case.
"""


class Solution:
    def numIslands(self, grid):
        if not grid or not grid[0]:
            return 0

        rows, columns = len(grid), len(grid[0])
        islands = 0

        for row in range(rows):
            for column in range(columns):
                if grid[row][column] != "1":
                    continue

                islands += 1
                grid[row][column] = "0"
                stack = [(row, column)]
                while stack:
                    current_row, current_column = stack.pop()
                    for row_change, column_change in (
                        (1, 0), (-1, 0), (0, 1), (0, -1)
                    ):
                        next_row = current_row + row_change
                        next_column = current_column + column_change
                        if (
                            0 <= next_row < rows
                            and 0 <= next_column < columns
                            and grid[next_row][next_column] == "1"
                        ):
                            grid[next_row][next_column] = "0"
                            stack.append((next_row, next_column))

        return islands
