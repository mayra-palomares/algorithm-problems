function removeDuplicates(nums: number[]): number {
    let k : number = 0;
    
    for(let i = k+1 ; i < nums.length; i ++){
        if(nums[k] < nums[i]){
            k++;
            nums[k] = nums[i];
        }
    }
    
    return k + 1;
}

const nums = [1,1,2];
console.log(removeDuplicates(nums));