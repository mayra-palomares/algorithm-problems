function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const graph = buildGraph(edges);
    return hasPath(graph, source, destination);
};

function hasPath(graph: Map<number, number[]>, source: number, destination: number): boolean {
    const stack = new Array<number>();
    const visited = new Set();

    stack.push(source);
    visited.add(source);

    while(stack.length > 0){
        const current = stack.pop()!;
        
        if(current === destination) return true;

        graph.get(current)?.filter(neighbor => !visited.has(neighbor)).forEach(neighbor => {
            stack.push(neighbor);
            visited.add(neighbor);
        })
    }
    return false;
};

function buildGraph(edges: number[][]): Map<number, number[]> {
    const graph: Map<number, number[]> = new Map();

    for(let edge of edges){
        const [u, v] = edge;
        if(!graph.has(u)) graph.set(u, []);
		if(!graph.has(v)) graph.set(v, []);

		const uEdges = graph.get(u)!;
		uEdges.push(v);
		graph.set(u, uEdges);

		const vEdges = graph.get(v)!;
		vEdges.push(u);
		graph.set(v, vEdges);
	}
	return graph;
};