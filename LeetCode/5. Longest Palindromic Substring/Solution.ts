function longestPalindrome(s: string): string {
    let longestPalindrome: string = "";
    const findLongestPalindrome = (i: number, j: number): string => {
        while(i >= 0 && j < s.length && s[i] === s[j] ){
            i--;
            j++;
        }
        return s.slice(i + 1, j);
    }

    let palindrome1: string, palindrome2: string, longerPalindrome: string;
    for(let i: number = 0; i< s.length; i++) {
        palindrome1 = findLongestPalindrome(i,i);
        palindrome2 = findLongestPalindrome(i, i+1);

        longerPalindrome = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

        if(longerPalindrome.length > longestPalindrome.length) {
            longestPalindrome = longerPalindrome;
        }
    }

    return longestPalindrome;
};