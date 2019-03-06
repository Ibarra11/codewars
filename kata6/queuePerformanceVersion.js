/*
    Codewars Link: https://www.codewars.com/kata/implementing-a-queue-performance-version/javascript
    Challenge Details: Implement a queue, that for the operatons enqueue and dequeue
                        they perform in constant time.
*/
function Queue(){
    this.data = {};
    this.currentQueuePosition = 0;
    this.nextQueuePosition = 0;
  }
  
  Queue.prototype.enqueue = function (val){
    this.data[this.nextQueuePosition] = val;
    this.nextQueuePosition++;
  }
  
  Queue.prototype.dequeue = function (){
    let queueSize = this.size();
    if(queueSize > 0){
      let removedValue = this.data[this.currentQueuePosition];
      delete this.data[this.currentQueuePosition];
      this.currentQueuePosition++;
      return removedValue;
    }
    else{
      return undefined;
    }
  }
  
  Queue.prototype.size = function (){
    return this.nextQueuePosition - this.currentQueuePosition;
  }
  