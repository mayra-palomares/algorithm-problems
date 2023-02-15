function simplifyPath(path: string): string {
    const stack: string[] = [];

    for(let str of path.split('/')){
        if(!str || str === '.'){
            continue;
        }

        if(str === '..'){
            stack.pop();
        }else{
            stack.push(str);
        }
    }

    return `/${stack.join('/')}`;
}