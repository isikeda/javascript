/*let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

console.log(40 + 8 + 23 - 10);

console.log("Eda");
let my_number = 23;
console.log(my_number);

let firstName = "Jonas";

console.log(firstName);

let country = "Turkey";
let continent = "Europe";
let pop = 80;

console.log(country);
console.log(continent);
console.log(pop);
*/
/*
let JavaScriptIsFun = true;
console.log(true);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);
*/
/*
//let keyword allows to change future, const doesnt, var is an old guy 

let age = 21;
age = 22;

const birthYear = 2001;
// const job; this is not allowed

var job = "programmer";

lastName = "isik"; // never do this
console.log(lastName);
*/
/*
const curYear = 2023;
const ageBerat = curYear - 2002;
const ageEda = curYear - 2001;
console.log(ageBerat, ageEda);

console.log(2 ** 3);

const firstName = "Eda";
const lastName = "Isik";
console.log(firstName, lastName);
// console.log(firstName, lastName); gives Eda Isik, 
//console.log(firstName + lastName); gives EdaIsik

console.log(ageBerat > ageEda);
*/


/*
const birthYear = 2001;
const job = "student";
const firstName = "Eda";
const year = 2023;

const eda = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(eda);
// not ', ` !!!
const newEda = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(newEda);
console.log(`Just a regular string`);
console.log('String with \n\multiple \n\lines');
console.log(`String with
multiple 
lines`);
*/
/*
const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah can not start driving license. Wait another ${yearsLeft} years.`);
}

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

/*
//Section2_20
//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Eda'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 21 + ' years old');
console.log('I am ' + '21' + ' years old'); //same as above actually
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; //11 the string
n = n - 1;
console.log(n);
*/

/*denemedenemedeneme
//Section2_21
// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log('Dont spend it all ;)');
}
else {
    console.log('You should get a job!');
}

let height = 10;
if (height) {
    console.log('yay! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
//Section2_22
const age = '18';

if ('18' == 18) console.log('yes'); //this is true
if ('18' === 18) console.log('yes'); //this is false

if (age === 18) console.log('You just became an adult xd (strict)');
if (age == 18) console.log('You just became an adult xd (loose)');

const fav = Number(prompt("What is your favorite number?"));
console.log(fav);
console.log(typeof fav);

if (fav === 5) {
    console.log('cool!')
} else if (fav === 7) {
    console.log('cool! (2)');
}

if (fav !== 23) console.log("why not 23?");
*/

/*
//Section2_24
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) console.log('Sarah is able to drive!');
else console.log('Somneone else should drive');

const isTired = false;
if (hasDriverLicense && hasGoodVision && !isTired) console.log('she can drive');
*/

/*
//Section2_26

const day = 'monday';

switch (day) {
    case 'monday': //day === 'monday
        console.log('Plan course structures');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;

    case 'friday':
        console.log('Record videos');
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;

    default:
        console.log('Not a valid day!');
}
*/

/*
//Section2_28
const age = 23;
age >= 18 ? console.log('You can drive.') : console.log('You cant drive.');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);  
*/