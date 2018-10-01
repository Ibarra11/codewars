function alphabetPosition(text) {
    /* 
      Codewars Link: https://www.codewars.com/kata/546f922b54af40e1e90001da
      Problem: Given a string replace each letter with its position in the alphabet.
      Input: 'Alan Ibarra'
      Output: 1 12 1 14 9 2 1 18 18 1
    */
  
  
    /* 
      The first step is to create a dictionary with the a letter/number format.
      Ex:
        {a:1, b:2, c:3 ... z:26}
     */
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetDictionary = {};
    for (let i = 0; i <= 25; i++) {
      let letter = alphabet[i]
      alphabetDictionary[letter] = i + 1;
    }
  
    let resultArr = [];
  
    /* 
      In this for loop the provided string is going to be iterated over character
      by character.  Some characters might be uppercased, so I am just lowercasing
      them because thats how I  set the regex evaluation up. The character
      will only be added to the array  if it is a lowercase alphabetic letter.
      After that I just lookup the character in the dictionary and push the value into the array;
  
    */
    for (let i = 0; i < text.length; i++) {
      let character = text[i].toLowerCase();
      if (character.match(/[a-z]/)) {
        resultArr.push(alphabetDictionary[character]);
      }
    }
    // Once I have the array, I am just going to join the elements into a string seperated by a space.
    return resultArr.join(' ');
  }
  
  alphabetPosition('Alan Ibarra');