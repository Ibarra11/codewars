/* 
    Codewars Link: https://www.codewars.com/kata/sort-the-odd/javascript
    Problem: Sort ascending odd numbers but even numbers stay in their place
    Sample Data:
        [5,3,2,8,1,4] => [1,3,2,8,5,4]
        [4,7,3,5] => [4,3,5,7]
*/


function sortArray(array){
    let oddIndices = [];
    let oddValues = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 1){
        oddIndices.push(i);
        oddValues.push(array[i]);
      }
    }
    // Sort the odd array of oddValues
    oddValues.sort((a,b) => a - b);
    for(let i = 0; i < oddIndices.length; i++){
      array[oddIndices[i]] =  oddValues[i]; 
    }
    return array;
  }
  