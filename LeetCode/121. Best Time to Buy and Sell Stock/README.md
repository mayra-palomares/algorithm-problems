# [121. Best Time to Buy and Sell Stock (Easy)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

<p>You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
</pre>

## Solution 1

```ts
function maxProfit(prices: number[]): number {
  let maxProfit: number = 0,
    buyIndex: number = 0,
    sellIndex: number = 1;
  while (sellIndex < prices.length) {
    if (prices[buyIndex] < prices[sellIndex]) {
      maxProfit = Math.max(maxProfit, prices[sellIndex] - prices[buyIndex]);
    } else {
      buyIndex = sellIndex;
    }
    sellIndex++;
  }
  return maxProfit;
}
```
