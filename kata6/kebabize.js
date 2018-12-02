/* 
    Codewars Link: https://www.codewars.com/kata/57f8ff867a28db569e000c4a
    Problem: convert a camelCase string to kebab case
    Sample Data:
        'helloWorld' => 'hello-world'
        'three3LitlleBoxes' -> three-little-boxes
        'aBcD' => a-bc-d
*/

/* 
    1. Filter the string and only allow alphanumeric characters
    2. iterate over the string and look at character after the current index
        - If it is uppercased, then I parse the string up to that uppercase character
    3. Finally, I just join the array into the kebab string
*/ 
function kebabize(str) {
    let startSubStringIndex = 0;
    let kebabStrArr = [];
    let subStr = '';
    // 1. filtering the string
    str = str.split('').filter(e => e.match(/[A-Za-z]/)).join('');

    for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1) {
            subStr = str.substring(startSubStringIndex).toLowerCase();
            kebabStrArr.push(subStr);
        }
        else if (str[i + 1] === str[i + 1].toUpperCase()) {
            let subStr = str.substring(startSubStringIndex, i + 1
            ).toLowerCase();
            kebabStrArr.push(subStr, '-');
            startSubStringIndex = i + 1;
        }
    }

    return kebabStrArr.join('');
}