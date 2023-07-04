type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    const result : MultiDimensionalArray = []

    const flatRec =  (array, level:number) => {

        for(let i=0; i < array.length; i++){
            if(Array.isArray(array[i]) && level > 0){
                flatRec(array[i], level - 1)
            }else{
                result.push(array[i])
            }
        }
    }

    flatRec(arr, n)
    return result;
};