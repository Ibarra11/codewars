function digital_root(n){
    /* 
        Codewars Link: https://www.codewars.com/kata/541c8630095125aba6000c00
        Problem: A digital root is teh recursive sum of the digits in the number.
                 Given n, take the sum of hte digits of n. If that value has two digits
                 continue reducing in this until a single-digit is produced
        Sample Set:
            Input: 942
                9 + 4 + 2 = 15
                1 + 5 = 6
                6 return 
        
    
    */
    // Base case: if the numbeer is less than 10 then I know it is a single digit and can return
    if(n < 10){
      return n;
    }
    // Coercing the input to a string, so I can iterate over every number
    let num = n + '';
    let sum = 0;
    for(let i = 0; i < num.length; i++){
       sum += parseInt(num[i])
    }
    return digital_root(sum);  
  }