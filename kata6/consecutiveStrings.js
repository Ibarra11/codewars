function longestConsec(strarr, k) {
    /* 
      Problem: Given an array of strings find the longest string of k consecutive strings
     Example input: ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzz'], 3
      Example Output: ixoyx3452zzzzzzzzzz
    */

    // THis is going to store the longes string
    let longestString = '';

    /*
      The for loop it is going to iterate from 0 to array length - k.  The reason is because we dont want to waste iterations.  
      For example:
        strArr = ['a', 'bb', 'ccc', 'dddd'];
        k = 3 
         The only possible consecutive strings of two are
         abb, bbccc, cccdddd.  We dont want to check dddd because there is no string after it. So we only want to iterate to 'ccc'.  We can define that by strarr.length - k;
     */
    for (let i = 0; i <= strarr.length - k; i++) {
        let tempStr = '';
        /* 
          The inner for loop builds up the consecutive strings.
          We start at i  and move over k iterations to build the consecutive string.  
          For Example:
            Lets say that i = 0 and strarr = ['a', 'bb', 'ccc', 'dddd'] and k = 2
            1st iteration of inner loop:
              j = 0;
              condition = j < 2
              tempStr = a
            2nd iteration of inner loop:
            j = 1
            condition = j < 2
            tempStr = abb
            Next iteration the condition fails because j = 2
        */
        for (let j = i; j < i + k; j++) {
            tempStr += strarr[j];
        }
        if (tempStr.length > longestString.length) {
            longestString = tempStr;
        }
    }
    return longestString;
}


longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzz'], 3);