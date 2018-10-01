function validBraces(braces) {
    /* 
        Codewars Link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56
        Problem: Write a function that takes a string of braces, and determines if the order of the braces is valid.
        Input:
            '{([])}'
            '(]'
        Output:
            '{([])}' => true
            '(]' => false
    */
    let resultArr = [];
    for (let i = 0; i < braces.length; i++) {
        let brace = braces[i];
        /* 
            For every character from the input, it is going to be evaluated in the switchg statement.  If it is 
            a opening brace than we push it into an array.  If is a closing brace then we pop an item of the array
            and compare it with its counterpart.  If they are match we proceed otherwise return false.  If we iterate
            thought the whole loop, we finally check the if the array is empty.  If it is not than that means that 
            there are still braces in the array and it is invalid otherwise return true.
        */
        switch (brace) {
            case '(':
            case '[':
            case '{':
                resultArr.push(brace);
                break;
            case ')':
                if (resultArr.pop() === '(') {
                    break;
                }
                else {
                    return false;
                }
            case ']':
                if (resultArr.pop() === '[') {
                    break;
                }
                else {
                    return false;
                }
            case '}':
                if (resultArr.pop() === '{') {
                    break;
                }
                else {
                    return false;
                }
        }
    }
    return resultArr.length > 0 ? false : true;
}