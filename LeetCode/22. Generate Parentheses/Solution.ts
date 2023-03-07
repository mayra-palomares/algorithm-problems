function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    const generateRec = (left:number, right: number, stack: number, combination: string): void => {
        if(left === 0 && right === 0){
            result.push(combination);
            return;
        }

        if(left > 0){
            generateRec(left-1, right, stack + 1, combination + "(");
        }

        if(right > 0 && stack > 0){
            generateRec(left, right-1, stack - 1, combination + ")");
        }
    }

    generateRec(n, n, 0, "");

    return result;
};