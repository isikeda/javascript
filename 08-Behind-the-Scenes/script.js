'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge(2001);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAgeArrow(2001);

/*const eda = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};*/

//eda.calcAge();

const matilda = {
  year: 2017,
};

//matilda.calcAge = eda.calcAge;

//matilda.calcAge();

//const f = eda.calcAge;
//f();

const eda = {
  firstName: 'Eda',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2023 - this.year);
    /*
    Solution 1
    const self = this;

    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    */

    /*Solution2*/
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

eda.greet();
eda.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

//addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Eda',
  age: 21,
};

const friend = me;
friend.age = 20;

console.log('Friend:', friend);
console.log('Me:', me);
