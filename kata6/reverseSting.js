function insideOut(x){
    /* 
      Problem: Create a function that  reverses a string from the inside out
      Input: What time are we climbing up to the volcano
      Output: hwta item are we milcgnib up to the lovcona
      Conditions: 
        if the string is odd leave the middle character alone
        if the string is even move all characters
    */
  
    // Split the string into an array of individual strings
    // Ex: [What, time, are, we, climbing, up, to, the, volcano]
    let strToArray = x.split(' ').map(e =>{
      // I am going to divide each string in the array into two parts
      /* Ex: 
            e = climbing
            leftHalf = clim
            rightHalf = bing  
      */
      let middle = Math.floor(e.length / 2);
      let leftHalf;
      let rightHalf;
  
       // I am then going to reverse both halves by invoking the reverseString method and return
      //  the concatenation of both calls
      /* Ex: 
            reverseSting(leftHalf) = milc
            reverseString(rightHalf) = gnib;
            return reverseSting(leftHalf) + reverseSting(rightHalf) 
      */
      leftHalf = e.substring(0,middle);
      if(e.length % 2 === 0){
         rightHalf = e.substring(middle);
          return reverseString(leftHalf) + reverseString(rightHalf);
      }
      else{
        rightHalf = e.substring(middle + 1);
        return reverseString(leftHalf) + e[middle] + reverseString(rightHalf);
      }   
    });
  
      function reverseString(str){
      let tempStr = '';
      for(let i = str.length - 1; i >= 0; i--){
        tempStr += str[i];
      }
      return tempStr;
    }
  
    return strToArray.join(' ');
  
  }
  
  insideOut('what time are we climbing up to the volcano');