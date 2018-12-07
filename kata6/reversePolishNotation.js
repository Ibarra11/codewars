function calc(expr) {
    let stack = [];
    expr = expr.split(' ');
    if (expr.length > 1) {
      for (let i = 0; i < expr.length; i++) {
        let val1, val2;
        if (expr[i] === '*') {
          val1 = stack.pop();
          val2 = stack.pop();
          stack.push(val1 * val2);
        }
        else if (expr[i] === '+') {
          val1 = stack.pop();
          val2 = stack.pop();
          stack.push(val1 + val2);
        }
        else if (expr[i] === '-') {
          val1 = stack.pop();
          val2 = stack.pop();
          stack.push(val2 - val1);
        }
        else if (expr[i] === '/') {
          val1 = stack.pop();
          val2 = stack.pop();
          stack.push(val2 / val1);
        }
        else{
          stack.push(+expr[i]);
        }
      }
      console.log(stack);
      return stack[0];
    }
    else{
      console.log(expr);
      return expr[0] ?  parseFloat(expr[0]) : 0;
    }
  }
  
  calc('');