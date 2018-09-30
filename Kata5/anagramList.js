/* 
    Problem: write a function that will find all the anagrams of
             a word from a list.
    Sample Data:

    'aaba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
   
    'racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

    'laser', ['lazing', 'lazy',  'lacer']) => []
*/
function anagrams(word, words) {
    let wordDictionary = createDictionary(word);
    let compareDictionariesFn = compareDictionaries.bind(null, wordDictionary);
    let resArr = [];
    for (let i = 0; i < words.length; i++) {
      let tempDictionary = createDictionary(words[i]);
      if (compareDictionariesFn(tempDictionary)) {
        resArr.push(words[i]);
      }
    }
    return resArr;
  }
  
  
  /* 
    This function compares two dictionaries or objects to see
    of they are equal.
    input: {a:2, b:2}, {a:2, b:2}
    output: true
  */
  function compareDictionaries(dict1, dict2) {
    let dict1Keys = Object.keys(dict1);
    let dict2Keys = Object.keys(dict2);
    if (dict1Keys.length === dict2Keys.length) {
      for (let i = 0; i < dict1Keys.length; i++) {
        let key = dict1Keys[i];
        if (dict1[key] !== dict2[key]) {
          return false;
        }
      }
      return true;
    }
    else {
      return false;
    }
  }
  
  /* 
    This function creates a dictionary from a given word. And returns an object with each distict character as a key and 
    a value of the number of times that character appears in the word.
    input: 'aabb'
    output: {a:2, b:2}
  */
  function createDictionary(word) {
    let tempObj = {};
    for (let i = 0; i < word.length; i++) {
      if (!tempObj[word[i]]) {
        tempObj[word[i]] = 1;
      }
      else {
        tempObj[word[i]]++;
      }
    }
    return tempObj;
  }
  
  
  anagrams('racer', ['lazing', 'lazy', 'lacer'])