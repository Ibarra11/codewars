/* 
    Codewars Link: https://www.codewars.com/kata/5966847f4025872c7d00015b/solutions/javascript
    Challenge: You are given a string of numbers from 0-9.  Find the average of the numbers
               and return it as a floored whole number written as a string 
    Sample Data:
        "zero one two three" => 1
        "four two five" => 3
*/


function averageString(str){
    let numberDictionary = {"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9};
    if(str){
      let stringDigits = str.split(" ");
      let sum = 0;
      let average;
      let digit;
      for(let i = 0; i < stringDigits.length; i++){
        digit = numberDictionary[stringDigits[i]]
        if(Number.isInteger(digit)){
          sum += digit;
        }
        else{
          return 'n/a';
        }
      }
      average = Math.floor(sum / stringDigits.length);
      return findKeyByValue(numberDictionary, average);
    }
    else{
      return "n/a";
    }
  }
  
  function findKeyByValue(obj, value){
    console.log(obj, value);
    for(prop in obj){
      if(obj[prop] === value){
        return prop;
      }
    }
  }
  