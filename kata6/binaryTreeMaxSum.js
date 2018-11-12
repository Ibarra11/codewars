function maxSum(root) {
    let max = 0;
    let arr = [];
    function preorder(root) {
      if (!root) {
        return;
      }
      else {
        arr.push(root.value);
  
        if (!root.left && !root.right) {
          let temp = arr.reduce((total, value) => {
            return total + value;
          })
          if (max < temp) {
            max = temp;
          }
          arr.pop();
        }
        else {
          if (root.left) {
            preorder(root.left);
          }
          if (root.right) {
            preorder(root.right);
          }
          arr.pop();
        }
      }
    }
    preorder(root);
    return max;
  }