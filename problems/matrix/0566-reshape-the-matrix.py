"""#566 Reshape the Matrix
Flatten in row-major order and slice the values into rows of the new width.
Time: O(mn) | Space: O(rc) for the reshaped result.
"""


class Solution:
    def matrixReshape(self, mat, r, c):
        if not mat or not mat[0] or len(mat) * len(mat[0]) != r * c:
            return mat

        values = [value for row in mat for value in row]
        return [values[start:start + c] for start in range(0, len(values), c)]
