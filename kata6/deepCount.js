/* 
    Codewars Link: https://www.codewars.com/kata/596f72bbe7cd7296d1000029
    Problem: Create a function that returns the number of All elements within 
             an array, including any within inner-level arrays.
    Sample Data:
        [1,2,[3]] => 4
        [1,2,3] => 3
*/
function deepCount(a) {
    let count = 0;
    function countLevel(level) {
        for (let i = 0; i < level.length; i++) {
            if (Array.isArray(level[i])) {
                count++
                countLevel(level[i]);
            }
            else {
                count++;
            }
        }
    }
    countLevel(a);
    return count;
}