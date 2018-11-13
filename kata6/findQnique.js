/* 
    Codewars Link: https://www.codewars.com/kata/find-the-unique-number-1/train/javascript
    Problem: There is an array with some numbers.  All numbers are equal except for one. Find that numnber.
    Sample Data: 
        [1,1,1,2,1,1] => 2
        [0,0,0.5,0,0] => 0.5
*/

function findUniq(arr) {
    /* 
      Keep cache of the numbers and how many times they appear.  The property with value equal to 1 is the unique number.
      Ex:
        {1:5,2:1,3:4}
    */
    let cache = {};
    for (let i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            cache[arr[i]] = 1;
        }
        else {
            cache[arr[i]]++;
        }
    }
    for (let prop in cache) {
        if (cache[prop] === 1) {
            return +prop;
        }
    }
}