/* 
  Codewars Link: https://www.codewars.com/kata/multiplication-table/javascript
  Challenge: Create a NxN multiplication table, of size provided by the paramater
  Ex:
    multiplication(2) => [[1,2], [2,4]]

*/
 
multiplicationTable = function(size){
    let table = [];
    let row = [];
    let rowLevel = 1;
    while(rowLevel <= size){
      for(let i = 1; i <= size; i++){
        row.push(rowLevel * i);
      }
      table.push(row);
      rowLevel++;
      row = [];
    }
    return table;
  }
  
  multiplicationTable(2);