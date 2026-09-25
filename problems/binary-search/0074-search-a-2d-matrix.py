"""#74 Search a 2D Matrix
Binary-search the matrix as a virtual sorted one-dimensional array.
Time: O(log(mn)) | Space: O(1)
"""


class Solution:
    def searchMatrix(self, matrix, target):
        if not matrix or not matrix[0]:
            return False

        rows, columns = len(matrix), len(matrix[0])
        left, right = 0, rows * columns - 1

        while left <= right:
            middle = left + (right - left) // 2
            value = matrix[middle // columns][middle % columns]
            if value == target:
                return True
            if value < target:
                left = middle + 1
            else:
                right = middle - 1

        return False
