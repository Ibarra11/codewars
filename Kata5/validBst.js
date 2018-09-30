/* 
  Codewars Link: 
  Problem: Validating a Binary Search Tree
  Two valid types of Binary Search Trees
    Ascending Order BST =>  | left node | < | root | < | right node |
    Descending Order BST => | right node | < | root | < | left node |
  
*/
class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  const isBST = node => {
    let current = node;
    let arr = [];
    /* 
      In order to determine if the supplied tree is a valid BST, it is going to be traversed
      in a in order fashion. This is going to result in nodes visited in either Ascending or Descending 
      fashion.  The nodes visited are going to be stored in an array. 
    */
    function inOrderTraversal(head) {
      if (head === null) {
        return true;
      }
      if (head.left === null && head.right === null) {
        arr.push(head.value);
        return head.data;
      }
      if (head.left) {
        inOrderTraversal(head.left);
      }
      arr.push(head.value);
      if (head.right) {
        inOrderTraversal(head.right);
      }
    }
    inOrderTraversal(current);
    /* 
      At this point our array has been filled with the nodes and we are going to check what type of tree 
      is it.  If the first element of the array is less than the last element than it is an ascending order otherwise
      it is descending order.  Based on that we are the check the elements next to each to see if they follow the 
      given formula of a valid BST in either ascending or descending order.
    */
    if (arr[0] < arr[arr.length - 1]) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          return false;
        }
      }
    }
    else if (arr[0] > arr[arr.length - 1]) {
      for (let i = arr.length - 1; i >= 1; i--) {
        if (arr[i] > arr[i - 1]) {
          return false;
        }
      }
    }
    return true;
  }