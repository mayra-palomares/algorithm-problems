function intToRoman(num: number): string {
    let romanNum: string = "";
    const conversionMap: Map<string, number> = new Map();
    conversionMap.set('M', 1000);
    conversionMap.set('CM', 900);
    conversionMap.set('D', 500);
    conversionMap.set('CD',400);
    conversionMap.set('C', 100);
    conversionMap.set('XC', 90);
    conversionMap.set('L', 50);
    conversionMap.set('XL', 40);
    conversionMap.set('X', 10);
    conversionMap.set('IX', 9);
    conversionMap.set('V', 5);
    conversionMap.set('IV', 4);
    conversionMap.set('I', 1);

    
    for(let conversion of conversionMap.entries()){
        const [numSymbol, value] : [string, number] = conversion;

        const count: number = Math.floor(num / value);

        if(count > 0){
            romanNum += numSymbol.repeat(count);
            num = num % value;
        }
    }

    return romanNum;
};
