# [50. Pow(x, n) (Medium)](https://leetcode.com/problems/powx-n/)

<p>Implement pow(x, n), which calculates x raised to the power n (i.e., xn).</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 2.00000, n = -2
<strong>Output:</strong> 0.25000
<strong>Explanation:</strong> 2-2 = 1/22 = 1/4 = 0.25
</pre>

## Solution 1

```ts
function myPow(x: number, n: number): number {
    if(n === 0){
        return 1;
    }else if(n < 0){
        x = 1/x;
        n = -n;
    }
    
    if(n % 2 === 0){
        return myPow(x*x, n/2);
    }else{
        return x * myPow(x*x, (n-1)/2);
    }
}
```