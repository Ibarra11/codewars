String.prototype.camelCase = function () {
    /* 
      Problem: write a camecase method on the string prototype
      Input: 'hello World'
      Output: 'HelloWorld'
    */
  
    // this.valueOf() => The string the methos is called on
    // I am checking that it is not empty
    if(this.valueOf()){
      return str = this.valueOf().trim().split(' ').map(e => {
        return e[0].toUpperCase() + e.substring(1);
      }).join('');
    }
    return "";
      
  } 