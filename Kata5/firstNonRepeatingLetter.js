function firstNonRepeatingLetter(s) {
    /* 
        Codewars Link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
        Problem: Write a function that takes a string input, and returns the first characters that is not repeated
                 anywhere within the string.
        Sample Data:
            'stress' => 't'
            'a' => 'a'
            'abacde'  => b
    */

    /* 
        Cache is going to store the each unique character in an object and how many times appears in the string
            ex:
                cache = [{value:a, count:2}, {value:b,count: 2}]
    */
    let cache = [];
    /* 
         CacheIndexLookup is going to behave like a lookup table.  So, for each 
         distinct character there going to be added to the array.  And their position corresponds
         to the position of the cache.  In the following example, I know a is in the first position in 
         the array and and b in the last spot.  
        ex:
            cache = ['a', 'b']
    */
    let cacheIndexLookup = [];
    // I am just making a copy of the original string and lowecasing because this problem is case-insensitive
    let tempS = s.slice().toLowerCase();
    for (let i = 0; i < s.length; i++) {
        let index = cacheIndexLookup.indexOf(tempS[i]);
        if (index >= 0) {
            cache[index].count += 1;
        }
        else {
            cache.push({ value: s[i], count: 1 });
            cacheIndexLookup.push(tempS[i]);
        }
    }
    // Once all characters in the string have been encounted for, the next step is to loop through the
    // and return the first obj values whose count is 1, which means it hasn't been repeated.  However,
    // if there isn't a character that has not been repeated return an empty string.
    for (let obj of cache) {
        if (obj.count === 1) {
            return obj.value;
        }
    }
    return "";
}