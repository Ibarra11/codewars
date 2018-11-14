/* 
    Codewars Link: https://www.codewars.com/kata/checking-groups/train/javascript
    Problem: Create a progam that checks a string for correct grouping
    Sample Data:
        '({})' => true
        '([}) => false
*/

function groupCheck(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
            case '[':
            case '{':
                stack.push(s[i]);
                break;
            case ')':
                if (stack.pop() !== '(') {
                    return false;
                }
                break;
            case ']':
                if (stack.pop() !== '[') {
                    return false;
                }
                break;
            case '}':
                if (stack.pop() !== '{') {
                    return false;
                }
                break;
        }
    }

    return stack.length === 0 ? true : false;
}