function order(words) {
    /* 
    Codewars Link: https://www.codewars.com/kata/55c45be3b2079eccff00010f
      Problem: Task a given string.  Each string will contain
             a number corresponding to where it should be 
             postitioned.
      Sample Data:
          Input: 'th2 h1ello b4b n3d' => Output: 'h1ello th2 b4b n3d'
          Input: '' => Output: ''
    */
  
    // If the string is empty return an empty string
    if (!words) {
      return '';
    }
    else {
      /* 
        Split the words into individual elements in a string
        Ex:
          'b2 a1 c3' => ['b2', 'a1', 'c3']
      */
      let strToArr = words.split(' ');
       strToArr.sort((a,b) =>{
        /* 
          We are going to sort the array based on the number in each string.  To find the number in the string i used the unary + operator on the characters on the string to determine if its a number or not.
        */
        let numA, numB;
        for(let i  = 0; i < a.length; i++){
            if(+a[i] >= 1) numA = +a[i];
        }
        for(let j = 0; j < b.length; j++){
          if(+b[j] >=1) numB = +b[j];
        }
        return numA - numB;
      })
      return strToArr.join(' ');
    }
  }
  
  order('is2 Thi1s T4est 3a');