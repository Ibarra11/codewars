/* 
    Codewars Link: https://www.codewars.com/kata/linked-lists-sorted-insert/javascript
    Problem: Insert a node in the linked list in ascending order
    Sample Data:
      insert: 2.5, LinkedList: 1 -> 2 -> 3 -> null  => 1-> 2-> 2.5 => 3
      insert 1, LinkedList: null => 1 -> null
      insert 4, LinkedLIst: 1->2->null => 1 -> 2 -> 4 -> null
*/
function Node(data) {
    this.data = data;
    this.next = null;
}

function sortedInsert(head, data) {
    let node = new Node(data);
    // If the list is emptyu we set the head equal to the node and return
    if (head === null) {
        head = node;
        return head;
    }
    // if the new node is less than the head, then we point the node to 
    // head and return the new node
    else if (head.data > data) {
        node.next = head;
        return node;
    }
    else {

        let current = head;
        let prevNode;
        /* 
          In the while loop we are going to traverse the linked list
          until, we reach a condition or we reach the end of the list.
          which is null.  Also, we are going to keep track of the previois
          node, so we can insert correctly.
        */
        while (current !== null) {
            if (data < current.data) {
                prevNode.next = node;
                node.next = current;
                return head;
            }
            prevNode = current;
            current = current.next;
        }
        /* 
            If the program reaches this portion of the code that means
            that we have to insert at the tail of the linkedlist.
        */
        prevNode.next = node;
        node.next = null;
        return head;
    }
}
