class Dinglemouse {
    constructor() {
      this.name = this.age = this.sex = 0;
      this.attributeArr = [];
      this.attributeLookup = {};
    }
  
    setAge(age) {
      if (this.attributeLookup['age']) {
        this.age = age;
      }
      else {
        this.attributeArr.push('age');
        this.attributeLookup['age'] = age;
        this.age = age;
      }
      return this
    }
  
    setSex(sex) {
      if (this.attributeLookup['sex']) {
        this.sex = sex;
      }
      else {
        this.attributeArr.push('sex');
        this.attributeLookup['sex'] = sex;
        this.sex = sex;
      }
      return this;
    }
    setName(name) {
      if ('name' in this.attributeLookup) {
        this.name = name;
      }
      else {
        this.attributeArr.push('name');
        this.attributeLookup['name'] = name;
        this.name = name;
      }
      return this
    }
  
    hello() {
      let str = this.attributeArr.reduce((total, a, index) => {
        if (index !== this.attributeArr.length - 1) {
          return total + this.attributePhrases[a](this[a]) + ' ';
        }
        else {
          return total + this.attributePhrases[a](this[a]);
        }
      }, '');
      return `Hello.${str ? ' ' + str : ''}`;
    }
  }
  
  Dinglemouse.prototype.attributePhrases = {
    age: function (attr) {
      return `I am ${attr}.`;
    },
    sex: function (attr) {
      return `I am ${attr == 'M' ? 'male' : 'female'}.`;
    },
    name: function (attr) {
      return `My name is ${attr}.`;
    }
  }
  