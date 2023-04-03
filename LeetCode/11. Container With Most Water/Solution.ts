function maxArea(height: number[]): number {
    let maxArea: number = 0, left: number = 0,  right: number = height.length - 1;
    
    while(left <= right) {
        let area: number = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, area);
        if(height[left] < height[right])
            left++
        else
            right--;
    }

    return maxArea;
};