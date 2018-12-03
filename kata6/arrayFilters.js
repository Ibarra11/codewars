Array.prototype.even = function () {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
      if (Number.isInteger(this[i]) && this[i] % 2 === 0) {
        tempArr.push(this[i]);
      }
    }
    return tempArr;
  }
  
  Array.prototype.odd = function () {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
      if (Number.isInteger(this[i]) && this[i] % 2 === 1) {
        tempArr.push(this[i]);
      }
    }
    return tempArr;
  
  }
  
  Array.prototype.under = function (x) {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
      if (Number.isInteger(this[i]) && this[i] < x) {
        tempArr.push(this[i]);
      }
    }
  
    return tempArr;
  }
  
  Array.prototype.over = function (x) {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
      if (Number.isInteger(this[i]) && this[i] > x) {
        tempArr.push(this[i])
      }
    }
    return tempArr;
  }
  
  Array.prototype.inRange = function (min, max) {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
      if (Number.isInteger(this[i]) && this[i] >= min && this[i] <= max) {
        tempArr.push(this[i])
      }
    }
    return tempArr;
  }