function isValid(s: string): boolean {
    let isValid: boolean = true, i: number = 0;
    const stack: string[] = [];

    while(isValid && i < s.length){
        let char: string = s[i];

        if(char === '('|| char === '{'|| char === '['){
            stack.push(char);
        }else{
            let topChar = stack.pop();
            isValid = (topChar === '(' && char === ')')  || (topChar === '{' && char === '}') || (topChar === '[' && char === ']');
        }
        i++;
    }

    isValid = isValid && stack.length === 0;

    return isValid;
};