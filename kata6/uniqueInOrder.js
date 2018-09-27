var uniqueInOrder = function (iterable) {
    /*
      Problem: Takes an arguement sequence and returns a list
      of items without any elements with the same value next to each other.
      Example Input: 'ABBCcAD'
      Example Output: 'ABCcAD'
    */
    // if the iterable arguement is empty just return an empty array
    if(!iterable){
      return [];
    }
    let cache = iterable[0];
    let uniqArr = [];
    for (let i = 1; i < iterable.length; i++) {
      if (cache !== iterable[i]) {
        uniqArr.push(cache);
        cache = iterable[i];
      }
      if (i === iterable.length - 1) {
        uniqArr.push(cache)
      }
    }
    if(iterable.length === 1 ? uniqArr.push(cache): '');
    return uniqArr;
  }
  
  uniqueInOrder([1]);