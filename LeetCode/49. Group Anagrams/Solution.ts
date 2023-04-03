function groupAnagrams(strs: string[]): string[][] {
    const anagramsMap: Map<string, string[]> = new Map();

    for(let str of strs){
        const sortedAnagram = str.split('').sort().join('');
        if(anagramsMap.has(sortedAnagram)){
            anagramsMap.get(sortedAnagram)?.push(str);
        }else{
            anagramsMap.set(sortedAnagram, [str]);
        }
    }

    return Array.from(anagramsMap.values());
};