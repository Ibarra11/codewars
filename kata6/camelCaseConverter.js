/* 
    Codewars Link: https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript
    Problem: Create a function that converts dash/underscore delimited words into camel casing.  
              The first word within the output should be capitalized only if the orignal words
              was capitaliized.
    Sample Data:
        '' => ''
        'the_stealth_warrior' => 'theStealthWarrior'
        'the-stealth-warrior' => 'theStealthWarrior'
*/

function toCamelCase(str) {
    // There are chances that string is empty if it is, we return an empty string.
    if (str) {
        /* Checking for the presence of a -.  If if there is one
         in the string then I split it by -.  Otherwise, I split ny _
        */
        let dashIndex = str.indexOf('-');

        let token = dashIndex > -1 ? str.split('-') : str.split('_');
        return token.map((str, index) => {
            if (index > 0) {
                let firstLetter = str[0].toUpperCase();
                return firstLetter + str.substring(1);
            }
            return str;
        }).join('');
    }
    else {
        return '';
    }
}

toCamelCase('the-stealth-warrior');