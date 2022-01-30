'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const movType = mov >= 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movType}">${
      i + 1
    } ${movType}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposits => (deposits * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.round(interest)}€`;
};

const createUsernames = function (accts) {
  accts.forEach(acct => {
    acct.username = acct.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

createUsernames(accounts);

/*****************************
// Event handlers
*****************************/

let currentAccount;

// Login
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    // Dispaly UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// Transfer money
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    receiverAccount &&
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAccount.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

// Loan
btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Close account
btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(0, -3));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE - Mutates
// // console.log(arr.splice(2));
// arr.splice(-1);
// let arr2 = arr.splice(1, 2);
// console.log(arr);
// console.log(arr2);

// // REVERSE - Mutates
// let arr3 = ['z', 'y', 'x', 'w', 'v'];
// console.log(arr3.reverse());
// console.log(arr3);

// // CONCAT
// let arr4 = arr.concat(arr3);
// console.log([...arr, ...arr3]);
// console.log(arr4);

// // JOIN
// console.log(arr3.join('-'));

// // AT
// console.log(arr[4]);
// console.log(arr.at(4));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('arthur'.at(3));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i} - You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i} - You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movement ${i} - You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i} - You withdrew ${Math.abs(mov)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD', 'USD']);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, _, set) => {
//   console.log(`${value}: ${value}`);
// });

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// function checkDogs(arr1, arr2) {
//   const arr1dogs = arr1.slice(1, -2);
//   const allDogs = arr1dogs.concat(arr2);
//   allDogs.forEach((dog, i) => {
//     const msg =
//       dog < 3
//         ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
//         : console.log(
//             `Dog number ${i + 1} is an adult, and it is ${dog} years old`
//           );
//   });
// }

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// checkDogs(dogsJulia, dogsKate);

// const eurToUsd = 1.1;

// const converted = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(converted);

// const movDesc = movements.map((mov, i) =>
//   mov > 0
//     ? `Movement ${i + 1} - You deposited ${mov}`
//     : `Movement ${i + 1} - You withdrew ${Math.abs(mov)}`
// );
// console.log(movDesc);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov <= 0);
// console.log(movements);
// console.log(withdrawals);

// console.log(movements);
// const balance = movements.reduce((acc, cur) => acc + cur, 100);
// console.log(balance);

// const maxNum = function (arr) {
//   const max = arr.reduce((acc, cur) => (cur > acc ? cur : acc), movements[0]);
//   console.log(max);
// };

// maxNum(movements);

// Coding Challenge #2

/* 
  Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
  
  Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
  
  1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
  2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
  3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
  4. Run the function for both test datasets
  
  TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
  TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
  
  GOOD LUCK 😀
  */

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(cur => (cur <= 2 ? 2 * cur : 16 + cur * 4));
//   console.log(humanAge);

//   const adultDogs = humanAge.filter(cur => cur >= 18);
//   console.log(adultDogs);

//   const avgAge = adultDogs.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0
//   );
//   console.log(avgAge);
// };

// const calcAverageHumanAge = function (ages) {
//   const avgAdultAge = ages
//     .map(cur => (cur <= 2 ? 2 * cur : 16 + cur * 4))
//     .filter(cur => cur >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   console.log(Math.round(avgAdultAge));
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map((mov, i, arr) => {
//   //   console.log(arr);
//   //   return Math.trunc(mov * eurToUsd);
//   // })
//   .map(mov => Math.trunc(mov * eurToUsd))
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// FIND
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find((mov, i, arr) => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// SOME
// console.log(movements);
// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov > 5000);
// console.log(anyDeposits);

// EVERY
// console.log(account4.movements.every(mov => mov > 0));

// Separate callback
// const deposit = mov => mov > 0;

// console.log(movements.some(deposit));

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// const arrD = [
//   [1, [2, 2.5], 3],
//   [4, 5, 6],
// ];

// FLAT
// console.log(arr.flat());

// console.log(arrD.flat(2));

// console.log(
//   accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0)
// );

// FLATMAP
// console.log(
//   accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
// );

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0 ; A, B
// return > 0 ; B, A

// ascending order
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   })
// );
// console.log(movements.sort((a, b) => a - b));

// descending order
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
//   })
// );
// console.log(movements.sort((a, b) => b - a));

// const x = new Array(7);
// console.log(x);

// x.fill(1, 3, 5);
// console.log(x);

// const y = Array.from({ length: 7 }, () => 1);

// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + i);
// console.log(z);

// const aa = Array.from(
//   { length: 100 },
//   (_, i) => Math.trunc(Math.random() * 6) + 1
// );

// console.log(aa);

// labelBalance.addEventListener('click', () => {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI2);
// });

/***************************************
 Mutate array
***************************************/

// Add to original
// arr.push()              (end)
// arr.unshift()           (start)

// Remove from original
// arr.pop()               (end)
// arr.shift()             (start)
// arr.splice()            (any)

// Others
// arr.reverse()
// arr.sort()
// arr.fill()

/***************************************
 Create new array
***************************************/

// Computed from original
// arr.map()               (loop)

// Filtered using condition
// arr.filter()

// Portion of original
// arr.slice()

// Adding original to other
// arr.concat()

// Flattening the original
// arr.flat()
// arr.flatMap()

/***************************************
 Get array index
***************************************/

// Based on value
// arr.indexOf()

// Based on test condition
// arr.findIndex()

/***************************************
 Get array element
***************************************/

// Based on test condition
// arr.find()

/***************************************
 Does array contain certain element
***************************************/
// These return boolean values

// Based on value
// arr.includes()

// Based on test condition
// arr.some()
// arr.every()

/***************************************
 Get a new string
***************************************/

// Based on separator string
// arr.join()

/***************************************
 Transfom to a value
***************************************/

// Based on accumulator
// arr.reduce()
// (Boil down array to single value of any type: number, string, boolean, or new array or object)

/***************************************
Loop over the array
***************************************/

// Basd on callback
// arr.forEach()
// (Does not create a new array, just loops over it)

// const bankDepositSum = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .filter(mov => mov > 0)
//   .reduce((sum, mov) => sum + mov);

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, mov) => sum + mov, 0);
// console.log(bankDepositSum);

// const depositsOver1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);

// // const depositsOver1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(depositsOver1000);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
// {}
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits);
// console.log(withdrawals);

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'as'];

//   const titleCase = title
//     .toLowerCase()
//     .replace(/\s+/g, ' ')
//     .trim()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('and this is a   LONG    title but not too long'));
// console.log(convertTitleCase('this is another title with an EXAMPLE'));

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// const recommendedFood = weight ** 0.75 * 28;

dogs.forEach(
  dog => (dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28))
);

console.log(dogs);

dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    const ratio = dog.curFood / dog.recommendedFood;
    const recMax = Math.round(dog.recommendedFood * 1.1);
    const recMin = Math.round(dog.recommendedFood * 0.9);
    console.log(ratio, dog.recommendedFood, recMax, recMin);
    let amount;

    if (ratio > 1.1) amount = 'too much';
    else if (ratio < 0.9) amount = 'too little';
    else amount = 'the right amount of';

    console.log(
      `Sarah's dog is eating ${amount} food.\nIt's ideal feeding amount is between ${recMin} g and ${recMax} g,\nand it is receiving ${dog.curFood} g`
    );
  }
});

const ownersEatTooMuch = dogs
  .reduce((arr, dog) => {
    if (dog.curFood / dog.recommendedFood > 1.1) {
      arr.push(dog.owners);
    }
    return arr;
  }, [])
  .flat();

const ownersEatTooLittle = dogs
  .reduce((arr, dog) => {
    if (dog.curFood / dog.recommendedFood < 0.9) {
      arr.push(dog.owners);
    }
    return arr;
  }, [])
  .flat();

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

const arrToStr = function (arr) {
  const modArr = arr.map((el, i, arr) => {
    if (arr.length - i === 1) {
      return el + `'s`;
    } else if (arr.length - i === 2) {
      return el + ` and `;
    } else {
      return el + `, `;
    }
  });
  return modArr;
};

const ownersDogsStatus = function (arr, status) {
  const arrLen = arr.length;
  console.log(
    `${arrToStr(arr).join('')} ${
      arrLen === 1 ? 'dog eats' : 'dogs eat'
    } ${status}.`
  );
};
ownersDogsStatus(ownersEatTooMuch, 'too much');
ownersDogsStatus(ownersEatTooLittle, 'too little');

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
console.log(
  dogs.some(
    dog =>
      Math.abs(dog.curFood - dog.recommendedFood) < dog.recommendedFood * 0.1
  )
);

const dogsOK = dogs.filter(
  dog => Math.abs(dog.curFood - dog.recommendedFood) < dog.recommendedFood * 0.1
);

console.log(dogsOK);

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
