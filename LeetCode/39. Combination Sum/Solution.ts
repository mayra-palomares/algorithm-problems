function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    const rec = (index: number, combination: number[], total: number): void => {
        if(total === target) {
            result.push(combination);
            return;
        }

        if(index >= candidates.length || total > target) {
            return;
        }

        rec(index + 1, combination, total);
        rec(index, [...combination, candidates[index]], total + candidates[index]);
    }

    rec(0, [], 0);

    return result;
};