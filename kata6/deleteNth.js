/* 
    Codewars Link: https://www.codewars.com/kata/554ca54ffa7d91b236000023
    Problem: Given a list and a Number N, create a new list that contains each
             number in the list at most n times
    Sample Data:
        list = [1,1,1,1], N = 2 => [1,1]
        list = [10,15,10,11,14], N=1 => [10,15,11,14]
*/
function deleteNth(arr,n){
    let cache = {};
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
      if(!cache[arr[i]]){
        cache[arr[i]] = 1;
        tempArr.push(arr[i]);
      }
      else if(cache[arr[i]] < n){
        cache[arr[i]]++;
        tempArr.push(arr[i]);
      }
    }
    return tempArr;
  }