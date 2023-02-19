# [36. Valid Sudoku (Medium)](https://leetcode.com/problems/valid-sudoku/)

<p>Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

<strong>Note:</strong>

* A Sudoku board (partially filled) could be valid but is not necessarily solvable.
* Only the filled cells need to be validated according to the mentioned rules.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
<strong>Output:</strong> true
</pre>

## Solution 1

```ts
function isValidSudoku(board: string[][]): boolean {
    let rowSet : Set<string> = new Set(),
        colSet : Set<string> = new Set(),
        boxSet : Set<string> = new Set(),
        num: string;

    for(let i:number=0; i < board.length; i++){
        rowSet.clear();
        colSet.clear();
        boxSet.clear();

        for(let j:number=0; j < board[i].length; j++){
            num = board[i][j];
            if(rowSet.has(num)){
                return false;
            }else if(num !== '.'){
                rowSet.add(num);
            }

            num = board[j][i];
            if(colSet.has(num)){
                return false;
            }else if(num !== '.'){
                colSet.add(num);
            }

            num = board[3*Math.floor(i/3) + Math.floor(j/3)][Math.floor(i%3)*3 + j%3];
            if(boxSet.has(num)){
                return false;
            }else if(num !== '.'){
                boxSet.add(num);
            }
        }   
    }

    return true;
}
```