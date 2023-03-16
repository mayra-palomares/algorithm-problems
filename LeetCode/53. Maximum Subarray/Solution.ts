function maxSubArray(nums: number[]): number {
    let maxSum: number = nums[0], currentSum: number = nums[0];
    for(let i= 1; i< nums.length; i++){
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
};