function stringTransformer(str){
    /* 
      Problem: transfrom the string so that every lowecase letter is uppercase and vice versa.  Also, reverse the order of the strings.
      Input: Example string
      Output: STRING eXAMPLE
    */
    let strToArr = str.split(' ').reverse().map(e =>{
      let tempStr = '';
      for(let i = 0; i < e.length; i++){
        if(e[i] === e[i].toUpperCase()){
          tempStr += e[i].toLowerCase();
        }
        else{
          tempStr += e[i].toUpperCase();
        }
      }
      return tempStr
    });
  
   return strToArr.join(' ');
  }