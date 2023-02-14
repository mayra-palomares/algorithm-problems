function isPalindrome(s: string): boolean {
    const text:Array<string> = s.toLowerCase().replace(/[^a-z0-9]/gi,'').split('')

    for(let i=0, j= text.length -1; i<=j; i++, j--){
        if(text[i] !== text[j]){
            return false
        }
    }
    return true
};