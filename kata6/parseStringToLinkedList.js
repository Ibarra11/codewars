/* 
    Codewars Link: https://www.codewars.com/kata/parse-a-linked-list-from-a-string
    Challenge Details: Form a linked list from a string input
    Sample Data:
        "1 -> 2 -> 3 -> null" => Node{data: 1, next: node{data:2, next:{ node{data: 3, next: null}}}}
*/


function parse(string){
    if(string !== 'null'){
      let values = string.split(' -> ');
      let head = new Node(+values[0]);
      let current = head;
      let newNode;
      for(let i = 1; i < values.length - 1; i++){
        newNode = new Node(+values[i]);
       if(i === 1){
         head.next = newNode;
         current = newNode;
       }
       else if(values[i] !== 'null'){
         current.next = newNode;
         current = newNode;
       }
      }
      current.next = null;
      return head;
    }
    else{
      return null;
    }
  }
  
  class Node{
    constructor(data, next=null){
      this.data = data;
      this.next = next;
    }
  }
  