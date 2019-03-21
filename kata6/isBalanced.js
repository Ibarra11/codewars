/* 
    Codewars Link: https://www.codewars.com/kata/balance-the-tree/javascript
    Problem: Determine whether a tree is  balanced.  If it is balanced return true
             otherwise return false.

*/

function isBalanced(root){
    let leaves =  {};
    let maxLeafLevel = 0;
    let minLeafLevel = 0;
    function findLeafNodes(currentNode, currentLevel){
      // IF the current node doesn't have any children then I know it is a leaf.
      if(!currentNode.left && !currentNode.right){
       return leaves[currentNode.value] = currentLevel;
      }
      if(currentNode.left){
         findLeafNodes(currentNode.left, currentLevel+1);
      }
      if(currentNode.right){
        findLeafNodes(currentNode.right, currentLevel+1);
      }
    }
    function findMaxMinLeaf(){
      for(let prop in leaves){
        if(!maxLeafLevel && !minLeafLevel){
          maxLeafLevel = leaves[prop];
          minLeafLevel = leaves[prop];
        }
        else if(maxLeafLevel < leaves[prop]){
          maxLeafLevel = leaves[prop];
        }
        else if(minLeafLevel > leaves[prop]){
          minLeafLevel = leaves[prop];
        } 
      }
    }
    findLeafNodes(root, 0);
    findMaxMinLeaf();
    return (maxLeafLevel - minLeafLevel) === 1 || (maxLeafLevel - minLeafLevel) === 0
  }