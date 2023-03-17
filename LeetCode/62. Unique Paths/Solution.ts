function uniquePaths(m: number, n: number): number {
    const dp: number[][] = [...new Array(m)].map(() => Array(n).fill(1));
    let left: number, above: number;

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            left = dp[i - 1][j];
            above = dp[i][j - 1];
            dp[i][j] = left + above;
        }
    }

    return dp[m-1][n-1];
}