'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getAirport = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, depart, arrival, time] = flight.split(';');
  const output = `${type.includes('Delayed') ? '🔴' : ''} ${type
    .slice(1)
    .replace('_', ' ')} from ${getAirport(depart)} to ${getAirport(
    arrival
  )} (${time.replace(':', 'h')})`.padStart(45);
  console.log(output);
}

// `underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure `;

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const rawText = document.querySelector('textarea').value;
//   console.log(rawText);

//   const lines = rawText.split('\n');
//   console.log(lines);

//   for (const [i, line] of lines.entries()) {
//     const [first, second] = line.trim().toLowerCase().split('_');
//     const secondCamel = second.replace(second[0], second[0].toUpperCase());
//     console.log(first.concat(secondCamel).padEnd(20, ' ') + '✅'.repeat(i + 1));
//   }
// });
//   console.log(convertedLines);

//   let counter = 1;
//   for (const line of convertedLines) {
//     console.log(line.padEnd(20, ' ') + '✅'.repeat(counter));
//     counter++;
//   }
// });

// const airline = 'TAP Air Portugal';

// const plane = 'A320';

// console.log('B747'[2]);

// console.log(airline.slice(0, airline.indexOf(' ')));

// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   const col = seat.slice(-1);
//   console.log(col);
//   if (col === 'B' || col === 'E') {
//     console.log('Middle seat');
//   } else {
//     console.log('Not middle');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('11D');

// const message = 'The door door is closed';

// console.log(message.replace(/door/g, 'gate'));
// console.log(message.replaceAll('door', 'gate'));

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const uniqueEvents = [...new Set(gameEvents.values())];

// console.log(uniqueEvents);

// console.log(gameEvents);

// gameEvents.delete(64);

// console.log(gameEvents);

// const keys = [...gameEvents.keys()];

// console.log(
//   `An event happened on average every ${90 / gameEvents.size} minutes`
// );

// // const gameEventsArr = [...gameEvents];

// for (const [key, value] of gameEvents) {
//   let half;
//   half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }
// console.log(gameEventsArr);

// const question = new Map([
//   ['question', "What's the best programming language"],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Well done'],
//   [false, 'Try again'],
// ]);

// console.log(question);

// const rest = new Map();

// rest
//   .set('categories', ['italian', 'indian', 'ethiopian', 'japanese'])
//   .set('open', 11)
//   .set('closed', 23)
//   .set(true, "We're open")
//   .set(false, "We're closed")
//   .set(1, 'Florence, Italy')
//   .set('name', 'Classico');

// console.log(rest.get(1));

// const time = 21;

// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
// const numlist = [1, 2, 3, 4, 3, 2, 3, 5, 6];

// const numset = new Set(numlist);

// console.log(numset);
// console.log(numset.size);
// console.log(numset.has(2));
// console.log(numset.has(7));
// console.log(numset.add(7));
// console.log(numset.add(7));
// console.log(numset.add(7));
// numset.delete(2);
// console.log(numset.clear());
// console.log(numset.has(2));
// console.log(numset.has(7));

// const staff = [
//   'waiter',
//   'chef',
//   'manager',
//   'waiter',
//   'waiter',
//   'chef',
//   'driver',
// ];
// const roles = new Set(staff);

// const rolesArr = [...roles];

// console.log(staff);
// let uniqueRoles = roles.size;
// console.log(uniqueRoles);

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

// const goalsScored = game.scored;
// const scorers = {};
// for (const goal of goalsScored) {
//   scorers[goal] ? scorers[goal]++ : (scorers[goal] = 1);
// }
// console.log(scorers);

// const winningOdds = Object.entries(game.odds);
// console.log(winningOdds);

// for (const [team, odds] of winningOdds) {
//   let teamName = team === 'x' ? 'draw' : game[team];

//   console.log(`Odds of victory ${teamName}: ${odds}`);
// }

// for (const [i, goal] of game.scored.entries()) {
//   console.log(`Goal ${Number(i) + 1}: ${goal}`);
// }

// const odds = Object.values(game.odds);

// let sum = 0;
// let count = 0;
// for (const odd of odds) {
//   sum += odd;
//   count++;
// }
// console.log(`Average odds are ${sum / count}`);
