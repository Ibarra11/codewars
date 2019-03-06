
/* 
  Codewars Link: https://www.codewars.com/kata/linked-lists-insert-nth-node/javascript
  Challenge Details: Implement a function which can insert a new node at any index within a list;
  Sample Data:
   LL =  1 - 2 -> 3 -> null
   insert(ll, 2, 5) => 1 -> 2 -> 5 -> 3
*/
function insertNth(head, index, data) {
    let indexCount = 0;
    let currentNode = head;
    let previousNode;
    let newNode = new Node(data);
    if (head !== 'null') {
      // if the index is 0 this means that we are inserting at the head
      if (index === 0) {
        newNode.next = head;
        return newNode;
      }
      else {
        while (indexCount < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          indexCount++;
        }
        previousNode.next = newNode;
        newNode.next = currentNode;
        return head;
      }
    }
    else {
      return currentNode;
    }
  }
  
  