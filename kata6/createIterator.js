/* 
  Codewars Link: https://www.codewars.com/kata/5c743cec901022438549964a
  Problem: Implement an iterator which recieves an array of values, returns
           an object with a next function and index;
  Example Code:
    let iterator = createIterator([1,2,3]);

    iterator.index => 0
    iterator.next() => {value: 1, done: false}

    iterator.index => 1
    iterator.next() => {value: 2, done: false}

    iterator.index => 2
    iterator.next() => {value: 3, done: false}

    iterator.index => 3
    iterator.next() => {value: undedfined, done: true}
    



*/ 

const createIterator = array =>{
  return {
    index: 0,
    next: function(){
    let value = array[this.index] ? array[this.index] : undefined;
    let done = this.index >= array.length;
    done !== true ? this.index++ : null;
    return {value, done};
    }
  }
}