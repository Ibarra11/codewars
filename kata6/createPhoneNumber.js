

function createPhoneNumber(numbers) {
    let phoneNumber = "";
    let digit;
    for (let i = 0; i < numbers.length; i++) {
      digit = String(numbers[i]);
      switch (i) {
        case 0:
          phoneNumber += "(" + digit;
          break;
        case 1:
          phoneNumber += digit;
          break;
        case 2:
          phoneNumber += digit + ")" + " ";
          break;
        case 3:
        case 4:
          phoneNumber += digit
          break;
        case 5:
          phoneNumber += digit + "-";
          break;
        case 6:
        case 7:
        case 8:
        case 9:
          phoneNumber += digit;
          break;
      }
    }
    return phoneNumber;
  }
  
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  