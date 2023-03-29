function spiralOrder(matrix: number[][]): number[] {
    const spiral: number[] = [], 
        m: number = matrix.length,
        n: number = matrix[0].length;
    let left: number = 0,
        right: number = n - 1,
        top: number = 0,
        bottom: number = m - 1;
    
    while(spiral.length < m*n){
        for(let i = left; i <= right; i++){
            spiral.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i <= bottom; i++){
            spiral.push(matrix[i][right]);
        }
        right--;

        for(let i = right; i >= left && top<=bottom; i--){
            spiral.push(matrix[bottom][i]);
        }
        bottom--;

        for(let i = bottom; i >= top && left <= right; i--){
            spiral.push(matrix[i][left]);
        }
        left++;
    }

    return spiral;
};