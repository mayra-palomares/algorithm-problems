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
