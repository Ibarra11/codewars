/* 
    Codewars Link: https://www.codewars.com/kata/validate-credit-card-number/train/javascript
    Problem: Determine if a credit card is valid using Luhn Algorithim
    Sample Data:
        123 => false
        2121 => true
        1230 => true
*/

function validate(n) {
    /* 
        Convert the credit card number into an array with each digit seperated
        Ex:
            1714 => [1,7,1,5]
    */
    let arrOfDigits = String(n).split('').map(e => +e);

    // The firs part of the algorithim is doubling digits based on the parity of the CC number.
    doubleDigits(arrOfDigits);

    // Once the digits have been doubled, we add them up/
    let sum = arrOfDigits.reduce((total, digit) => {
        return total + digit;
    })
    // Finally, the last step in validating a CC number is checking to see
    // is sum is divisible by 10
    return sum % 10 === 0 ? true : false;
}

function doubleDigits(arr) {
    // Depending on the number of digits in the array we will double
    // every other number starting at the 0 or 1 index.
    let startIndex = arr.length % 2 === 0 ? 0 : 1;
    for (let i = startIndex; i < arr.length; i += 2) {
        arr[i] = arr[i] * 2;
        // If we double a digit and it is greater than 9, we subtract 9 from it.
        if (arr[i] > 9) {
            arr[i] = arr[i] - 9;
        }
    }
    return;
}
