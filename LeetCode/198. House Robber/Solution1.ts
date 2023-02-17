function rob(nums: number[]): number {
    let oneBefore: number = 0, 
        twoBefore: number = 0,
        currentAmt: number;
    for(let i=0; i<nums.length; i++){
        currentAmt = Math.max(nums[i] + twoBefore, oneBefore)
        twoBefore = oneBefore;
        oneBefore = currentAmt;
    }
    return Math.max(oneBefore, twoBefore);
}