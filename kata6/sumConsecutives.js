/* 
  codewars Link:https://www.codewars.com/kata/sum-consecutives/javascript
  Problem: YOu are given a list/array which contains only integers(positive/negative). Your job is to sum only the numbers that are the same and consecutive.
  Sample Data:
    [1,2,2,2,5,4] => [1,6,5,4]
    [1,1,1,5,3,3] => [3,5,6]
*/
function sumConsecutives(s) {
  let cache = {};
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    if (cache.num !== s[i]) {
      if (cache.occurences === 1) {
        newArr.push(cache.num);
      }
      else if (cache.occurences > 1) {
        newArr.push(cache.num * cache.occurences);
      }
      cache.num = s[i];
      cache.currentIndex = i;
      cache.occurences = 1;
    }
    else if (i - 1 === cache.currentIndex) {
      cache.occurences++;
      cache.currentIndex = i;
    }
  }
  newArr.push(cache.num * cache.occurences);
  return newArr;
}
