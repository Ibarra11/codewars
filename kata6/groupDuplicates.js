function group(arr){
    let cache = {};
    let indexes = [];
    let result = [];
    for(let i = 0; i < arr.length; i++){
      if(!cache[arr[i]]){
        cache[arr[i]] = [arr[i]];
        indexes.push(arr[i]);
      }
      else{
        cache[arr[i]].push(arr[i]);
      }
    }
    for(let i = 0; i < indexes.length; i++){
      result.push(cache[indexes[i]]);
    }
    return result;
  }