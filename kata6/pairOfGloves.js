/* 
    Kata: https://www.codewars.com/kata/pair-of-gloves/javascript
    Problem: Given an array of glove colors, figure out how many pairs there are
    Sample:
        ["red", "blue", "red"] => 1
*/ 

function numberOfPairs(gloves){
    let gloveCount = {};
    let pairs = 0;
    for(let i = 0; i < gloves.length; i++){
      if(Boolean(gloveCount[gloves[i]]) === false){
        gloveCount[gloves[i]] = 1;
      }
      else{
        gloveCount[gloves[i]] += 1;
      }
    }
    for(let glove in gloveCount){
      pairs += Math.floor(gloveCount[glove] / 2);
    }
    return pairs;
  }