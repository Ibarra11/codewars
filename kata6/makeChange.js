/* 
    Codewars Link: https://www.codewars.com/kata/making-change/javascript
    Problem: Write a method that determines the minimum number of coins
             needed to make change for a given amount;
    Sample Data:
        50 -> {H:1}
        13 -> {D:1, P:3}
*/


const makeChange = (amount) => {
  let changeObj = {};
  if (amount >= 50) {
    changeObj['H'] = Math.floor(amount / 50);
    amount = amount % 50;
  }
  if (amount >= 25) {
    changeObj['Q'] = Math.floor(amount / 25);
    amount = amount % 25;
  }
  if (amount >= 10) {
    changeObj['D'] = Math.floor(amount / 10);
    amount = amount % 10;
  }
  if (amount >= 5) {
    changeObj['N'] = Math.floor(amount / 5);
    amount = amount % 5;
  }
  if (amount > 0) {
    changeObj['P'] = amount;
  }
  return changeObj;
};