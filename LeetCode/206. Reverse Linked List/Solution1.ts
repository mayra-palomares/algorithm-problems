/* Definition for singly-linked list. */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}
 

function reverseList(head: ListNode | null): ListNode | null {
    let reversedList: ListNode | null = null;
    let currentNode: ListNode | null = head;
    
    while(currentNode !== null){
        const nodeToInsert: ListNode = new ListNode(currentNode.val, reversedList);
        reversedList = nodeToInsert;
        currentNode = currentNode.next;
    }
    
    return reversedList;
}