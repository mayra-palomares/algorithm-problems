export const towerBuilder = (nFloors: number): string[] => {
    const result:string[] = [];
    const space:string =" "
    const char:string = "*"
    for(let i:number = 0; i<nFloors; i++){
      result.push(space.repeat(nFloors - 1 - i) + char.repeat(i*2 + 1) + space.repeat(nFloors - 1 - i))
    }
    
    return result;
}