var numberFormat = function (number) {
    /* 
      1. Convert the number into a string and then into an array.  The reasoning behind this
        is so that I can add commas into certain index with an array.
      2. I want to check if the number is negative.  If it is then I want to keep a flag for it  and    I want to remove it because it's going to mess up the logic of the program.
      3. Loop through the array starting at end of the array  minus three. Doing it this way ensures    that I add a comma at the correct position.  To add a comma I am going to use the splice       method.
          Ex:
            number => 10000
              index = number.length(5) - 3 => 2
              Insert comma at index
                10,000
      4. If the number was negative then I append it to the number otherwise just return the number
              
    */
    let arrStr = number.toString().split('');
    let negativeSymbol = false;
    if (number < 0) {
      negativeSymbol = true;
      arrStr.splice(0, 1);
    }
    for (let i = arrStr.length - 3; i > 0; i -= 3) {
      arrStr.splice(i, 0, ',');
    }
    return negativeSymbol ? '-' + arrStr.join('') : arrStr.join('');
  }
  
  