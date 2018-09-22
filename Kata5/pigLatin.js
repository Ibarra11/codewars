function pigIt(str){
    /* 
        Problem: Move the first letter of each word to the end of it and then add 'ay' to it.
                 Leave punctionation Marks alone
        Input: 'Pig latin is cool'
        Output: igPay atinLay siay oolcay
    */

    // Split the string into invidivual array of words
    //  EX: Pig latin is cool => ["Pig", "latin", "is", "cool"]
    let words = str.split(' ').map(e =>{
    // Using a regular expression to verify that the word is not a punctuation mark.
      if(e.match(/[A-Za-z0-9]/)){
          // Extract the first character of the string   
          let firstChar = e[0]; 
          let newString = e.substring(1) + firstChar + 'ay';
          return newString;
      }
      else{
        return e;
      }
    });
    return words.join(' ');
  }