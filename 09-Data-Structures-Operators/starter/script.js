'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };

// const entries = Object.entries(openingHours);

// console.log(entries);

// for (const day of entries) {
//   console.log(
//     `On ${day[0]} the restaurant is open from ${day[1].open} to ${day[1].close}`
//   );
// }

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} the restaurant is open from ${open} to ${close}`);
// }

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is you pasta with ${ing1}, ${ing2}, and ${ing3}`);
//   },
// };

// const ingredients = [
//   prompt('Lets make pasta, ingredient 1?'),
//   prompt('Lets make pasta, ingredient 2?'),
//   prompt('Lets make pasta, ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1983, ...restaurant, founder: 'Luigi' };

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = null;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };

// console.log(add(1, 4, 5, 3, 6));

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

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// let [players1, players2] = game.players;

// console.log('Team 1:');
// console.log(players1);
// console.log('Team 2:');
// console.log(players2);

// let [gk, ...restPlayers] = players1;

// console.log(gk);
// console.log(restPlayers);

// let allPlayers = [...players1, ...players2];

// console.log(allPlayers);

// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

// let {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1);
// console.log(draw);
// console.log(team2);

// function printGoals(...players) {
//   let goals = 0;
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//     goals++;
//   }
//   console.log(`There were ${goals} goals`);
// }

// let scored = game.scored;
// console.log(scored);

// printGoals(...game.scored);

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team2 < team1 && console.log(`Team 2 is more likely to win`);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const goalsScored = game.scored;
const scorers = {};
for (const goal of goalsScored) {
  scorers[goal] ? scorers[goal]++ : (scorers[goal] = 1);
}
console.log(scorers);

// const winningOdds = Object.entries(game.odds);
// console.log(winningOdds);

// for (const [team, odds] of winningOdds) {
//   let teamName = team === 'x' ? 'draw' : game[team];

//   console.log(`Odds of victory ${teamName}: ${odds}`);
// }

for (const [i, goal] of game.scored.entries()) {
  console.log(`Goal ${Number(i) + 1}: ${goal}`);
}

// const odds = Object.values(game.odds);

// let sum = 0;
// let count = 0;
// for (const odd of odds) {
//   sum += odd;
//   count++;
// }
// console.log(`Average odds are ${sum / count}`);
