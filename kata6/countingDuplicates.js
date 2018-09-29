function duplicateCount(text){
    /* 
      Problem: Write a function that will return the distinct
      case-insensitve alphabetic characters and numeric digits 
      occur more than once.
     Sample Data:
        Input: 'abcde' =>  Output: 0
        Input: 'aabbcde' => Output: 2
        Input: 'aabBcde' => Output: 2
    
    */
    // Storage is going to cache the values encountered in the string
    let storage = {};
    // Count is going to increment the number of duplicates found in the string
    let count = 0;
    // Since it is case-insensitve, I just transformed the string to all lowercase
    text = text.toLowerCase();
    // The duplicate_flag is going to be used to determine whether a duplicate has been accounted for.
    const duplicate_flag = 'duplicateFalse';
    for(let i = 0; i < text.length; i++){
      /* 
        The first condition checks to see if the character or number exist as a property on the object.  If it doesn't add the character or number as a property on the object and set the value to duplicate_flag.
      */
      if(!storage[text[i]]){
        storage[text[i]] = duplicate_flag
      }
      /* 
        For this condition to happen the character or number has to already exist in the object. And we are checking if the value of the property is equal to duplicate_flag.  If it is then it means that we have not accounted for the duplicate, so we increment count and change the value of that property so we don't account for the same duplicate twice.
      */
      else if(storage[text[i]] === duplicate_flag){
        count++;
        storage[text[i]] = 'duplicateFound';
      }
    }
    return count;
  }
  
  duplicateCount('ABBA');