/* 
    Codewars Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c
    Problem: Write a function that increments a string, to create a new string.  If the string already ends with a number, the number should be incremented by 1.
    Sample Data:
      'foobar1' => 'foobar2'
      '1' => '2'
      'foobar0015' => 'foobar0016'
*/

function incrementString(string) {
    if (string[string.length - 1] >= 0) {
      let numberStartIndex, wordHalf, numberHalf;
      /*
        Iterate through string and find at which index the number starts.  Split the string into a number part and a string part.
        Ex:
          foobar001 
          numberINdex = 6
          wordHalf = foobar 
          numberHalf = 0001
  
      */
      for (let i = 0; i < string.length; i++) {
        if (string[i] >= 0) {
          numberStartIndex = i;
          break;
        }
      }
      /* 
        iF the numberIndex = 0 that means that it is a number in the form of a string.  In other words, there are no characters present in the string.
        Ex: '001
        Else we have to seperate the word from the number
      */
      if (numberStartIndex === 0) {
        return numberIncrement(string);
      }
      else if (numberStartIndex > 0) {
        wordHalf = string.substring(0, numberStartIndex);
        numberHalf = string.substring(numberStartIndex);
        return wordHalf + numberIncrement(numberHalf);
      }
      else {
        return (Number(string) + 1) + '';
      }
    }
  }
  
  function numberIncrement(strNum) {
    let num = 0;
    /*
      Iterate through the number in the form of a string until you encounter a number that is not 0 or the last index in the string.
      Ex:
       strNum =  '0100'
       num = '101'
       or
       strNum = '000'
       num = 001
     */
    for (let i = 0; i < strNum.length; i++) {
      if (+strNum[i] !== 0) {
        num = (parseInt(strNum.substring(i)) + 1) + '';
        break;
      }
      else if (i === strNum.length - 1) {
        num = (parseInt(strNum.substring(i)) + 1) + '';
      }
    }
    /* 
      IF the num is the same length as the parameter stNum passed in then we just return num;
      Ex:
        strNum = 0999
        num = 1000
        return num;
      Else the number has to be concatenated with the strNum.
        ex: strNum  = 0001
          num = 2
          retturn 000 + 2;
    */
    if (num.length === strNum.length) {
      return num;
    }
    else {
      return strNum.substring(0, strNum.length - num.length) + num;
    }
  }