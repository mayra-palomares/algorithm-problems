function shortestPalindrome(s: string): string {
    const originalStr = s,
        originalReversed = originalStr.split("").reverse().join("");
    let reversed = originalReversed;

    while(reversed !== s) {
        reversed = reversed.slice(1);
        s = s.slice(0, -1);
    }

    return originalReversed.slice(0, -reversed.length) + originalStr;
};