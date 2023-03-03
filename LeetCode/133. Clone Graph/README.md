# [133. Clone Graph (Medium)](https://leetcode.com/problems/clone-graph/)

<p>Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.</p>  

```js
    class Node {
        public int val;
        public List<Node> neighbors;
    }
```
<p><strong>Test case format:</strong></p>
<p>For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.</p>

<p><strong>Example 1:</strong></p>

<img src="images/Example1.png">  

<pre>
<strong>Input:</strong> adjList = [[2,4],[1,3],[2,4],[1,3]]
<strong>Output:</strong> [[2,4],[1,3],[2,4],[1,3]]
<strong>Explanation:</strong> There are 4 nodes in the graph.
    1st node (val = 1)'s neighbors are 2nd node (val = 2 and 4th node (val = 4).
    2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
    3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
    4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
</pre>

## Solution 1

```ts
function cloneGraph(node: Node | null): Node | null {
    if(!node) return null;
    const visited: Map<number, Node> = new Map();
    return cloneGraphRec(node, visited);
};

const cloneGraphRec =  (node: Node | null, visited: Map<number, Node>): Node | null => {
    const newNode = new Node(node!.val);
    visited.set(newNode.val, newNode);

    for(let neighbor of node!.neighbors) {
        let  newNeighbor: Node;
        if(visited.has(neighbor.val)){
            newNeighbor = visited.get(neighbor.val)!;
        }else{
            newNeighbor = cloneGraphRec(neighbor, visited)!;
        }

        newNode.neighbors.push(newNeighbor);
    }

    return newNode;
}
```