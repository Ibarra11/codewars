function findOutlier(integers) {
    let evens = [];
    let odds = [];
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        evens.push(integers[i])
      }
      else {
        odds.push(integers[i])
      }
    }
    if (evens.length === 1) {
      return evens.pop();
    }
    else {
      return odds.pop();
    }
  }