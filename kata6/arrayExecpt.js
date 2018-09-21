Array.prototype.except = function (keys) {
    /* 
      Problem: Extend the Array prototype with a function to return all elements of the array,
               except the ones with indexes passed in the paramater.\
      Input: Array of indices => [1,3] || interger => 1
      Output: The original array minus the specifed indices;
    */
    return this.filter((val, index) => {
        // Checking if the paramater it is an array of indices
        if (keys.length > 0) {
            return !keys.includes(index);
        }
        // Otherwise the paramater was a integer
        else {
            return index !== keys
        }
    })
}
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.except([0, 3]);