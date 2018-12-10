/* 
    Codewars Link: https://www.codewars.com/kata/simple-transposition/javascript
    Problem: 
        Create a function that takes a string and transposes it.
    Sample Data:
        'Simple Text' => 'Sml etipetx';
*/

function simpleTransposition(text) {
    let row1 = [];
    let row2 = [];
    for (let i = 0; i < text.length; i++) {
        if (i % 2) {
            row1.push(text[i]);
        }
        else {
            row2.push(text[i]);
        }
    }
    return row2.concat(row1).reduce((total, e) => {
        return total + e;
    }, '');
}