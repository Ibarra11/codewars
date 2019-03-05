/*
    Codewars Link: https://www.codewars.com/kata/linked-lists-append/javascript
    Challenge Details: Append one linked list to another
    Sample Data:
        listA: null, listB:null => null
        listA: 1 -> 2 -> null, listB: null => 1 -> 2 -> null
        listA: 1 -> 2 -> null, listB: 3 -> 4 -> null => 1 -> 2 -> 3 -> 4 -> null 

*/


function Node(data) {
    this.data = data;
    this.next = null;
}

function append(listA, listB) {
    // If both list are empty return null
    if (!listA && !listB) {
        return null;
    }
    // If one of the list is empty than return the other that isn't
    else if (!listA || !listB) {
        return listA || listB;
    }
    else {
        let current = listA;
        // Iterate through listA until you reach the tail, which is the node whose next value is null
        while (current.next !== null) {
            current = current.next
        }
        current.next = listB;
        return listA;
    }
}