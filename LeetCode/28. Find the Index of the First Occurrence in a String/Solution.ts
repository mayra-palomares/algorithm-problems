function strStr(haystack: string, needle: string): number {
    let i: number = 0, j: number = 0;
    const haystackLen: number = haystack.length, needleLen: number = needle.length;
    while(i < haystackLen && j < needleLen){
        if(haystack[i + j] === needle[j]){
            j++;
        }else{
            i++;
            j = 0; 
        }
    }

    return i < haystackLen ? i : -1;
};