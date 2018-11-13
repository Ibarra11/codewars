var createIterator = function (func, n) {
    let result;
    let iterations = n;
    function iterator(value) {
      if (iterations === 0) {
        iterations = n;
        return value;
      }
      iterations--;
      return iterator(func(value));
    }
    return function (val) {
      return iterator(val);
    }
  }