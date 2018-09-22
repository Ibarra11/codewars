function toUnderscore(string) {
    /* 
      Problem: Convert a PascalCase string into snake_case
      Input: 'GoodDay' (string) || 1 (number)
      Output: good_day || '1'
    */
  
    // if the string is a number convert the number into a string and return it
    if (typeof string === 'number') {
      return string + '';
    }
  
  
  
    // wordIndex is going to store the indexes of the capital letters in the string
    let wordIndex = findIndices(string);
  
    // words is going to store the words o
    let words = extractWords(wordIndex, string);
  
    /* 
      Description: This function is going to find the indexes of uppercase characters in the string
      Input: str => 'MoviesAndBooks'
      Output: tempArr => [0,7,10]
    */
    function findIndices(str) {
      let tempArr = [];
      for (let i = 0; i < str.length; i++) {
        if (string[i] === str[i].toUpperCase() && !str[i].match(/[0-9]/)) {
          tempArr.push(i);
        }
      }
      return tempArr;
    }
  
    /* 
        Description: This function is going to extract words from the given string based off an array of indices
        Input: indexArr => [0,7,10], str => 'MoviesAndBooks'
        Output: tempArr => movies_and_boooks
      */
    function extractWords(indexArray, str) {
      let tempArr = [];
      for (let j = 0; j < indexArray.length; j++) {
        let startIndex = indexArray[j];
        let endIndex = indexArray[j + 1];
        if (endIndex) {
          tempArr.push(str.substring(startIndex, endIndex).toLowerCase());
        }
        else {
          tempArr.push(str.substring(startIndex).toLowerCase());
        }
      }
      return tempArr;
    }
  
    return words.join('_');
  }
  
  toUnderscore('MoviesAndBooks');