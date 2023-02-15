/*
Section3_32
'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');
*/

/*
Section3_33
function logger() {
    console.log('My name is Eda');
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
Section3_34
function calcAge(birthYear) {
    return 2023 - birthYear;
}

console.log(calcAge(2001));

const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(2001);
console.log(age2);
*/

/*
Section3_35
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

//Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2001, 'Eda'));
*/

/*
Section3_36
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
Section3_37
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName, gender) => {
    const age = calcAge(birthYear);
    //const retirement = (gender = 'F') ? 60 - age : 65 - age; //there is a mistake in this code line
    let retirement;
    if (gender === 'F')
        retirement = 60 - age;
    else
        retirement = 65 - age;

    if (retirement > 0) return `${firstName} retires in ${retirement} years.`;
    //return retirement;
    else return -1;
}

console.log(yearsUntilRetirement(2001, 'Eda', 'F'));
console.log(yearsUntilRetirement(2002, 'Berat', 'M'));
*/

/*
Section3_39
const friend1 = 'michael';
const friend2 = 'steven';
const friend3 = 'peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice']; //this is a mistake, array is constant

const firstName = 'Eda';
const eda = [firstName, 'Işık', 2023 - 2001, 'Student', friends];
console.log(eda);

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years)); //output == NaN
*/

/*
Section3_40
const friends = ['Aleyna', 'Kadir', 'Berare'];
console.log(friends);
//Add element
const newLength = friends.push('Semih'); //adds to the end
console.log(friends);
console.log(newLength);
friends.unshift('Berat'); //adds to the beginning
console.log(friends);
//Remove element
const popped = friends.pop(); //removes from the end
console.log(friends);
console.log(popped);
const popped2 = friends.shift(); //removes from the beginning
console.log(friends);
console.log(popped2);

console.log(friends.indexOf('Kadir'));
console.log(friends.indexOf('Berat'));

friends.push(23);
console.log(friends.includes(23));
console.log(friends.includes('23'));

if (friends.includes('Aleyna')) {
    console.log('I have a friend named Aleyna');
}
*/

/*
Section3_42
const edaArray = [
    'Eda',
    'Işık',
    2023-2001,
    'student',
    ['Aleyna', 'Kadir', 'Berare']
];

const  eda = {
    firstName: 'Eda',
    lastName: 'Işık',
    age: 2023-2001,
    job: 'student',
    friends: ['Aleyna', 'Kadir', 'Berare']
};
*/

/*
Section3_43
const eda = {
    firstName: 'Eda',
    lastName: 'Işık',
    age: 2023 - 2001,
    job: 'student',
    friends: ['Aleyna', 'Kadir', 'Berare']
};

console.log(eda);
console.log(eda.age);
console.log(eda['age']);

const nameKey = 'Name';
console.log(eda['first' + nameKey]); //we cannot use these using
console.log(eda['last' + nameKey]);  //with the dot notation

const interestedIn = prompt('What do you want to know about Eda? Choose between firstName, lastName, age, job, and friends.');
//console.log(eda.interestedIn); //this is undefined -- wrong --we tried to access a property that does not exist
//console.log(eda[interestedIn]);

if (eda[interestedIn]) {
    console.log(eda[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
}

eda.location = 'İstanbul';
eda['twitter'] = '@edaluptus';

console.log(eda);

console.log(`${eda.firstName} has ${eda.friends.length} friends, and his best friend is called ${eda.friends[0]}.`);
*/

/*
Section3_44
const eda = {
    firstName: 'Eda',
    lastName: 'Işık',
    birthYear: 2001,
    job: 'student',
    friends: ['Aleyna', 'Kadir', 'Berare'],
    hasDriverLicense: true,

    //calcAge: function (birthYear) {
    //    return 2023 - birthYear;
    //}

    //calcAge: function () {
    //    //console.log(this);
    //    return 2023 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    summary: function () {
        let string = `${this.firstName} is a ${this.age} years old ${this.job}, and she has `;
        if (this.hasDriverLicense) {
            string += `a `;
        } else {
            string += `no `;
        }
        string += `driver's license.`;
        return string;
    }
};

console.log(eda.calcAge()); //this is required for accessing the age object!!!
console.log(eda.age);

console.log(eda.summary());
*/

/*
Section3_46
//for loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}!`);
}
*/

/*
Section3_47
const edaArray = [
    'Eda',
    'Işık',
    2023 - 2001,
    'student',
    ['Aleyna', 'Kadir', 'Berare'],
    true
];

const types = [];

for (let i = 0; i < edaArray.length; i++) {
    console.log(edaArray[i], typeof edaArray[i]);

    //types[i] = typeof edaArray[i];
    types.push(typeof edaArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);

console.log('---ONLY STRINGS---');
for (let i = 0; i < edaArray.length; i++) {
    if (typeof edaArray[i] !== 'string') continue;
    console.log(edaArray[i], typeof edaArray[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < edaArray.length; i++) {
    if (typeof edaArray[i] === 'number') break;
    console.log(edaArray[i], typeof edaArray[i]);
}
*/

/*
Section3_48
const edaArray = [
    'Eda',
    'Işık',
    2023 - 2001,
    'student',
    ['Aleyna', 'Kadir', 'Berare'],
    true
];

for (let i = edaArray.length - 1; i >= 0; i--) {
    console.log(i, edaArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/

/*
Section3_49
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) { // be sure about there is not infinite loops!
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/