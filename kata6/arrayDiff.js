function array_diff(a,b){
    /* 
      Problem: given two list subtract the elements in the second list from the first
      Input: a: [1,2,2,2,3] b: [2] 
      Output: [1,3]
    */ 
    return a.filter(e =>{
      return !b.includes(e);
    })
  }
  
  array_diff([1,2,2,2,3], [2]);