/* 
    Codewars Link: https://www.codewars.com/kata/520d9c27e9940532eb00018e
    Problem: Create a function that returns true if it contains any duplicate
             argument values. 
    Sample Data:
        (1,2,3) => false
        (1,2,3,2) => false
*/
function solution() {
    let argsObj = {};
    for (let i = 0; i < arguments.length; i++) {
      if (!argsObj[arguments[i]]) {
        argsObj[arguments[i]] = [arguments[i]];
      }
      else if (argsObj[arguments[i]]) {
        for (let j = 0; j < argsObj[arguments[i]].length; j++) {
          if (argsObj[arguments[i]][j] === arguments[i]) {
            return true;
          }
        }
        argsObj[arguments[i]].push(arguments[i]);
      }
      else {
        return true;
      }
    }
    return false;
  }