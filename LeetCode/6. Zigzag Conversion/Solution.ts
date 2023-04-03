function convert(s: string, numRows: number): string {
    
    if(numRows === 1) return s;
    
    const numDiagonal: number = numRows - 2,
        len: number = s.length;
    let convertedStr: string = "",
        index: number = 0,
        col: number = 0;

    for(let row = 0; row < numRows; row++){
        col = 0;
        index = 0;
        do {
            if(col % 2 === 0){
                index = col / 2 * (numRows + numDiagonal) + row;

                if(index < len){
                    convertedStr += s[index];
                }

            }else if(row > 0 && row < numRows - 1){
                index = (col + 1) / 2 * (numRows + numDiagonal) - row;

                 if(index < len){
                    convertedStr += s[index];
                }
            }

            col++;
        } while(index < len);
    }

    return convertedStr;
};