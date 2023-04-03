# [11. Container With Most Water (Medium)](https://leetcode.com/problems/container-with-most-water/)

<p>You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

## Solution 1

```ts
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
```
