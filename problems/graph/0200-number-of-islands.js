/**
 * #200 Number of Islands
 * Pattern: flood-fill each connected land component once.
 * Mark land when adding it to the stack so each cell is pushed at most once.
 * Time: O(rows * columns) | Space: O(rows * columns) worst case
 *
 * @param {string[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0

  const rows = grid.length
  const columns = grid[0].length
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let islands = 0

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      if (grid[row][column] !== '1') continue

      islands += 1
      grid[row][column] = '0'
      const stack = [row * columns + column]

      while (stack.length > 0) {
        const index = stack.pop()
        const currentRow = Math.floor(index / columns)
        const currentColumn = index % columns

        for (const [rowChange, columnChange] of directions) {
          const nextRow = currentRow + rowChange
          const nextColumn = currentColumn + columnChange

          if (
            nextRow >= 0 &&
            nextRow < rows &&
            nextColumn >= 0 &&
            nextColumn < columns &&
            grid[nextRow][nextColumn] === '1'
          ) {
            grid[nextRow][nextColumn] = '0'
            stack.push(nextRow * columns + nextColumn)
          }
        }
      }
    }
  }

  return islands
}

module.exports = numIslands
