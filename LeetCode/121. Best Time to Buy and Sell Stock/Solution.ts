function maxProfit(prices: number[]): number {
    let maxProfit: number = 0,
        buyIndex: number = 0,
        sellIndex: number = 1;
    while(sellIndex < prices.length) {
        if(prices[buyIndex] < prices[sellIndex]) {
            maxProfit = Math.max(maxProfit, prices[sellIndex] - prices[buyIndex]);
        }else{
            buyIndex = sellIndex;
        }
        sellIndex++;
    }
    return maxProfit;
};