/* 
    Codewars Link: https://www.codewars.com/kata/fun-with-lists-map/javascript
    Challenge Details: Given a linked list implement a map function that return a new list
                        with each node modified by the function.
    Sample Data:
       LL: 1 -> 2 -> 3 -> null 
       f() = x *2
       result = 2 -> 4 -> 6
*/

function map(head, f) {
    if (head) {
        // Starting the new list with the orignal list head modified
        let newListHead = new Node(f(head.data));
        let currentOldList = head.next;
        let currentNewList = newListHead;
        while (currentOldList) {
            currentNewList.next = new Node(f(currentOldList.data));
            currentOldList = currentOldList.next;
            currentNewList = currentNewList.next;
        }
        currentNewList.next = null;
        return newListHead;
    }
}