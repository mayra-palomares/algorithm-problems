function reverse(x: number): number {
    let reversedNum: number = +Math.abs(x)
      .toString()
      .split("")
      .reverse()
      .join("");
    if (x < 0) {
      reversedNum = reversedNum > Math.pow(2, 31) ? 0 : -reversedNum;
    } else {
      reversedNum = reversedNum > Math.pow(2, 31) - 1 ? 0 : reversedNum;
    }
    return reversedNum;
  }