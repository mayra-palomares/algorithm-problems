function letterCombinations(digits: string): string[] {
    const result: string[] = []
    const phoneLetters: string[] = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    const rec = (index: number, combination: string) => {
        if(digits.length === index) {
            result.push(combination);
            return;
        }

        const letters: string = phoneLetters[+digits[index]];
        for(let i:number = 0; i < letters.length; i++) {
            rec(index + 1, combination + letters[i]);
        }
    }

    if(digits){
        rec(0, "");
    }

    return result;
};