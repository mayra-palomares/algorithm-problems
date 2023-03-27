/**
 Do not return anything, modify matrix in-place instead.
 */
 function rotate(matrix: number[][]): void {
    const n: number = matrix.length;

    function transpose(matrix: number[][]): void{
        for(let i=0; i<n; i++){
            for(let j=i+1; j<n; j++){
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }

    function reverse(matrix: number[][]): void{
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n/2; j++){
                let temp = matrix[i][j];
                matrix[i][j] = matrix[i][n - j - 1];
                matrix[i][n - j - 1] = temp;
            }
        }
    }

    transpose(matrix);
    reverse(matrix);
};

