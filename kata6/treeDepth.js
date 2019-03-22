/* 
    Codewars Link: https://www.codewars.com/kata/tree-depth/train/javascript
    Challenge: Write a method that takes a nest object as input and returns
               the object with an added depth property.
    Sample Data:
      {a:1, b:{c: 2}} => {a:1, b:{c:2, depth: 1}, depth: 0}
       
*/

function recordDepth(tree){
    function addDepthKey(obj, depth){
      obj.depth = depth;
      for(let prop in obj){
        // if one of the keys values is an object then we make a recursive call.
        if(typeof obj[prop] === 'object' && obj[prop]){
          addDepthKey(obj[prop], depth+1);
        }
      }
    }
    // Ensuring that the only allowable value is an object.
    if(tree && !(tree instanceof Array) && typeof tree === 'object'){
      addDepthKey(tree, 0);
      return tree;
    }
    else{
      return null;
    }
  }
  
  recordDepth({a:1, b:2, c: {d: {e:3}}});
  
  