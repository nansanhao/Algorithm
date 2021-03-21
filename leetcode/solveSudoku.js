let sudoku = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
solveSudoku(sudoku)
console.log(sudoku)

function solveSudoku(board) {
    fill(0, 0)

    function check(row, col, str) {
        // 行内是否重复
        if (board[row].indexOf(str) !== -1) {
            return false
        }
        // 列内是否重复
        for (let i = 0; i < board.length; i++) {
            if (board[i][col] === str) {
                return false
            }
        }
        // 方块内是否重复 0,1,2
        let xBase = (row / 3 | 0) * 3 // | 0是向下取整
        let yBase = (col / 3 | 0) * 3
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[xBase + i][yBase + j] === str) {
                    return false
                }
            }
        }
        return true
    }

    function fill(row, col) {
        // console.log(board)
        if (col === 9) {
            row++
            col = 0
            if (row === 9) {
                return true
            }
        }
        if (board[row][col] === '.') {
            for (let i = 1; i <= 9; i++) {
                let str = i + ''
                if (check(row, col, str)) {
                    board[row][col] = str
                    if (fill(row, col + 1)) {
                        return true
                    }
                    board[row][col] = '.'
                }
            }
        } else {
            return fill(row, col + 1)
        }
        return false
    }

}