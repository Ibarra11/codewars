/* 
  Codewars Link: https://www.codewars.com/kata/replicate-new/javascript
  Problem: write a function that replicates all the behavior of the new operator
*/
function nouveau(Constructor) {
    let argArr = [];
    // Created an empty object whose prototype is linked to the constructor
    let newObj = Object.create(Constructor.prototype);
    let constructorCallResult;
    if (arguments.length > 1) {
      // Putting all the arguments into an array except the constructor
      for (let i = 1; i < arguments.length; i++) {
        argArr.push(arguments[i]);
      }
      // I invoke the constructor with the newObj context
      constructorCallResult = Constructor.call(newObj, ...argArr);
      // If the constructor returns a value then I return that value otherwise
      // I return the instance
      return constructorCallResult ? constructorCallResult : newObj;
    }
    else {
      constructorCallResult = Constructor.call(newObj);
      // If the construcotr returns an obj or a function then I return the value
      // otherwise I return null.
      if (typeof constructorCallResult === 'function' || typeof constructorCallResult === 'object' && constructorCallResult !== null) {
        return constructorCallResult;
      }
      else {
        return newObj;
      }
    }
  }
  
  