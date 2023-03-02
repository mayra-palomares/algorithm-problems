/**
 * Definition for Node.
 * */
class GraphNode {
     val: number
     neighbors: GraphNode[]
    constructor(val?: number, neighbors?: GraphNode[]) {
         this.val = (val===undefined ? 0 : val)
         this.neighbors = (neighbors===undefined ? [] : neighbors)
     }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
    if(!node) return null;
    const visited: Map<number, GraphNode> = new Map();
    return cloneGraphRec(node, visited);
};

const cloneGraphRec =  (node: GraphNode | null, visited: Map<number, GraphNode>): GraphNode | null => {
    const newNode = new GraphNode(node!.val);
    visited.set(newNode.val, newNode);

    for(let neighbor of node!.neighbors) {
        let  newNeighbor: GraphNode;
        if(visited.has(neighbor.val)){
            newNeighbor = visited.get(neighbor.val)!;
        }else{
            newNeighbor = cloneGraphRec(neighbor, visited)!;
        }

        newNode.neighbors.push(newNeighbor);
    }

    return newNode;
}