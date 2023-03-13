"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} att ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

/*Strings
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const airline = "THY";
console.log(airline.length);
console.log(airline.indexOf("H"));
console.log(airline.indexOf("h")); //output is -1

const anything = "Eda Isik Itu";
console.log(anything.slice(1));
console.log(anything.slice(2));
console.log(anything.slice(3));
console.log(anything.slice(4));

console.log(anything.slice(0, anything.indexOf(" ")));
console.log(anything.slice(anything.lastIndexOf(" ") + 1));

console.log(new String("eda"));
console.log(typeof new String("eda"));

console.log(anything.toLowerCase());
console.log(anything.toUpperCase());

//getting rid of white spaces and wrong upper letters
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io   \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmed = lowerEmail.trim();
console.log(trimmed);

const normalized = loginEmail.toLowerCase().trim();
console.log(normalized);

const priceTR = "5,6₺";
const priceUS = priceTR.replace("₺", "$").replace(",", ".");
console.log(priceTR, priceUS);

console.log("a+very+nice+string".split("+"));
console.log("Eda Işık Dalsuna".split(" "));

const [first, last] = "Eda Işık".split(" ");
const newN = ["Ms.", first, last.toUpperCase()].join(" ");
console.log(newN);

/*Maps
const ques = new Map([
  ["q", "What is the best programming language in the world?"],
  [1, "C++"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 1],
  [true, "Correct!"],
  [false, "Try again!"],
]);

//console.log(ques);
console.log(ques.get("q"));

for (const [key, value] of ques) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
const ans = Number(prompt("Your answer:"));
console.log(ques.get(ans === ques.get("correct")));

console.log([...ques]);
console.log(ques.entries());
console.log(ques.keys());
console.log(ques.values());

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
//rest.clear();
const arr = [1, 2];
//rest.set([1, 2], "Test");
rest.set(arr, "Test");
console.log(rest);
console.log(rest.size);

//console.log(rest.get([1, 2])); //undefined
console.log(rest.get(arr));
*/

/*Sets
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(new Set("Eda"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
//ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUn = [...new Set(staff)];
console.log(staff);
console.log(staffUn);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("edaisikdalsuna").size);
*/

/*
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

for (const [key, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
*/
/*
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");//??
*/

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
//console.log(...menu.entries());
/*
const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni",
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && "<anon>";
//rest2.owner = rest2.owner && "<anon>";

rest1.owner &&= "anon";
rest2.owner &&= "anon";

console.log(rest1);
console.log(rest2);
*/
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
//nullish: null and undefined(not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
//Short circutting
/*
console.log("----OR----");
console.log(3 || "Jonas");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("----AND----");
console.log(0 && "eda");
console.log(7 && "eda");
*/

/*
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
*/
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

//const ingreds = [ prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?"),];

//console.log(ingreds);

//restaurant.orderPasta(...ingreds);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 2,
  time: "22:30",
  address: "Via del Sole, 21",
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});
*/
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = {}, starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr; //destructuring
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories; //the elements can be skipped with ','s
console.log(main, secondary);

//let temp = main;
//main = secondary;
//secondary = temp;

console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
