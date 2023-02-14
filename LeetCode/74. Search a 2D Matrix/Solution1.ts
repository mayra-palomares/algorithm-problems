function searchMatrix(matrix: number[][], target: number): boolean {
    let m: number = matrix.length,
        n: number = matrix[0].length,
        low: number = 0,
        high: number = m * n - 1,
        mid: number,
        row: number,
        column: number,
        guess: number;

    while(low <= high){
        mid = Math.round((low + high)/2);
        row = Math.floor(mid/n);
        column = mid%n
        guess = matrix[row][column];

        if(guess === target){
            return true
        }else if(guess < target){
            low = mid + 1;
        }else{
            high = mid -1;
        }
    }
    return false;
};