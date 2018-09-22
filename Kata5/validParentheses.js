function validParentheses(parens) {
    /* 
      Problem: Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.  
      Input: '()()'
      Output: True
    */
    let stack = [];
    for (let i = 0; i < parens.length; i++) {
        switch (parens[i]) {
            // If it is an open curly brace push it onto the array
            case '(':
                stack.push(parens[i]);
                break;
            // If it is a ending curly brace pop the item of the array.  And check to see that there actually an item
            // to pop off.
            case ')':
                if (stack.pop()) {
                    break;
                }
                else {
                    return false;
                }
        }
    }
    // IF the order was correct nothing should be left in the
    // array
    return stack.length > 0 ? false : true
}

validParentheses('(())((()())())')