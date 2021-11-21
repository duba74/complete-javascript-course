'use strict';

// function calcAge(birthYear) {
//   // console.log(firstName);  // Won't work because it sees the variable in the function scope so throws error before checking the global scope?
//   const age = 2021 - birthYear;
//   const firstName = 'Arthur';
//   function printAge() {
//     let output = `${firstName}, If you had your birthday this year already, you are ${age} years old, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Marisol';
//       var string = `You are a millenial, ${firstName}`;
//       console.log(string);
//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(1, 5));
//       output = `New output`;
//     }
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Clinton';
// calcAge(1986);

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// var firstName = 'Clinton';
// let lastName = 'Lee';
// const age = 35;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 4));
// console.log(addArrow(2, 5));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All ${numProducts} deleted from shopping cart`);
// }
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All ${numProducts} deleted from shopping cart`);
// }

// var x = 1;
// let y = 2;
// const z = 3;
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(this);

// const calcAge = birthYear => {
//   const age = 2021 - birthYear;
//   console.log(this);
//   return age;
// };
// // function calcAge(birthYear) {
// //   const age = 2021 - birthYear;
// //   console.log(this);
// //   return age;
// // }

// calcAge(1986);

// const clinton = {
//   firstName: 'clinton',
//   year: 1986,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);

//     // Solution 1 - using self
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // Solution 2 - using arrow function
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// clinton.calcAge();

// const arthur = {
//   year: 2018,
//   // calcAge: function () {
//   //   console.log(this);
//   //   console.log(2021 - this.year);
// };

// let arthur = clinton;

// arthur.year = 2018;
// arthur.name = 'arthur';

// console.log(arthur);
// console.log(clinton);

// const f = clinton.calcAge;

// console.log(f);

// f();

// Arguments keyword
// function addDecl(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// const addArrow = (a, b) => {
//   // console.log(arguments);
//   return a + b;
// };

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 4));
// console.log(addArrow(2, 5));

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

console.log(jessica, marriedJessica);
marriedJessica.lastName = 'Davis';
console.log(jessica, marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Jim', 'Cindy'],
};

const marriedJessica2 = Object.assign({}, jessica2);
marriedJessica2.lastName = 'Jones';
marriedJessica2.family.push('Chuck');

console.log(jessica2);
console.log(marriedJessica2);
