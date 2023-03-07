function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    candidates.sort();

    const rec = (index: number, combination: number[], total: number): void => {
        if(total === target) {
            result.push([...combination]);
            return;
        }

        if(total > target || index >= candidates.length) {
            return;
        }

        combination.push(candidates[index]);
        rec(index + 1, combination, total + candidates[index]);
        combination.pop();

        while(candidates[index] === candidates[index + 1]) index++;
        rec(index + 1, combination, total);
    }

    rec(0, [], 0)
    return result;
};