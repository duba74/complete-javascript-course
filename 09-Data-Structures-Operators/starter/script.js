'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
};

// const ingredients = [
//   prompt('Lets make pasta, ingredient 1?'),
//   prompt('Lets make pasta, ingredient 2?'),
//   prompt('Lets make pasta, ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1983, ...restaurant, founder: 'Luigi' };

const add = function (...numbers) {
  console.log(numbers);
  let sum = null;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(1, 4, 5, 3, 6));

// restaurant.mainMenu = [...restaurant.mainMenu, 'Gnocci'];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// const {
//   menu = [],
//   name: restaurantName = [],
//   openingHours: hours = [],
//   categories: tags = [],
// } = restaurant;

// let a = 111;
// let b = 999;
// const obj = { a: 1, b: 4 };

// ({ a, b } = obj);

// const {
//   fri: { open: ouvert, close: ferme },
// } = restaurant.openingHours;

// let [first, , second, third] = restaurant.categories;

// console.log(first);
// console.log(second);
// console.log(third);

// [third, second, first] = [first, second, third];

// console.log(first);
// console.log(second);
// console.log(third);

// const [starterItem, mainItem] = restaurant.order(2, 0);

// console.log(`The client ordered ${mainItem} with a ${starterItem} starter`);

// const nested = [2, 3, [4, 5]];

// const [a, , [b, c]] = nested;

// console.log(a);
// console.log(b);
// console.log(c);
