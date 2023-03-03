# [1971. Find if Path Exists in Graph (Easy)](https://leetcode.com/problems/find-if-path-exists-in-graph/)

<p>There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.</p>

<p><strong>Example 1:</strong></p>

<img src="images/Example1.png">  

<pre>
<strong>Input:</strong> n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
<strong>Output:</strong> true
<strong>Explanation:</strong> There are two paths from vertex 0 to vertex 2:
    - 0 → 1 → 2
    - 0 → 2
</pre>

<p><strong>Example 2:</strong></p>

<img src="images/Example2.png">  

<pre>
<strong>Input:</strong> n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no path from vertex 0 to vertex 5.
</pre>

## Solution 1

```ts
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
```