function romanToInt(s: string): number {
    const conversionMap: Map<string, number> = new Map();
    conversionMap.set('CM', 900);
    conversionMap.set('CD',400);
    conversionMap.set('XC', 90);
    conversionMap.set('XL', 40);
    conversionMap.set('IX', 9);
    conversionMap.set('IV', 4);
    conversionMap.set('M', 1000);
    conversionMap.set('D', 500);
    conversionMap.set('C', 100);
    conversionMap.set('L', 50);
    conversionMap.set('X', 10);
    conversionMap.set('V', 5);
    conversionMap.set('I', 1);
    let num: number = 0;

    for(let conversion of conversionMap.entries()) {
        const [numSymbol, value] : [string, number] = conversion;
        const regex = new RegExp(`${numSymbol}`, 'g');
        let count = (s.match(regex) || []).length;
        s = s.replace(numSymbol, '');
        num += value * count;
    }

    return num;
};