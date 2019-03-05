/* 
    Codewars Link: https://www.codewars.com/kata/convert-a-linked-list-to-a-string/javascript
    Challenge Details: Convert a linked list to a string
*/


function stringify(list){
    if(list){
      let string = "";
      let current = list;
      while(current){
        string += current.data  + " -> ";
        current = current.next;
      }
      return string + "null";
    }
    else{
      return null;
    }
  }