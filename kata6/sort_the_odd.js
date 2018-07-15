function sortArray(array){
    let oddArray = array.filter( e => e % 2 === 1).sort((a,b) => b  - a);
    array.forEach((e,i) =>{
      if( e % 2 === 1){
        array[i] = oddArray.pop();
      }
    })
  
    return array;
  }