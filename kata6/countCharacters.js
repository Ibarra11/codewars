function count(string){
    let storage = {};
    for(let i = 0; i < string.length; i++){
      // char represent each character of the string
      let char = string[i]; 
      // If the character already exist on the object as a property increment the value by one
      if(storage[char]){
        storage[char] += 1;
      }
      // Otherwise add the char on the object as  property and set the value equal to 1.
      else{
        storage[char] = 1;
      }
    }
    return storage;
  }
 