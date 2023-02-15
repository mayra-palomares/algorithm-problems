# [206. Reverse Linked List (Easy)](https://leetcode.com/problems/reverse-linked-list/)

<p>Given the head of a singly linked list, reverse the list, and return the reversed list.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong>head = [1,2,3,4,5]
<strong>Output:</strong> [5,4,3,2,1]
</pre>

## Solution 1

```ts
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
```