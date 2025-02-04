'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', () => {
    if (header.style.color === 'blue') {
      header.style.color = 'red';
    } else {
      header.style.color = 'blue';
    }
  });
})();

// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding group ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassenger(100, 3);

// let f;

// const g = function () {
//   const a = 23;

//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f();
// f();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };

// const booker = secureBooking();
// console.dir(booker);

// (function () {
//   console.log('some text');
// })();

// (() => console.log('some text'))();

// {
//   const privateVar = 3;
// }

// console.log(privateVar);

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // const msgArr = [this.question, ...this.options, '(Write option number)'];
//     // const msg = msgArr.join('\n');
//     let ans = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     while (!Number.isInteger(ans) || ans > 3 || ans < 0) {
//       //   alert('Please enter a valid answer');
//       ans = Number(prompt(`Please enter a valid answer\n${msg}`));
//     }

//     this.answers[ans]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     } else console.log('Try again with the correct response');
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const data1 = {
//   answers: [5, 2, 3],
// };

// const data2 = {
//   answers: [1, 5, 3, 9, 6, 1],
// };

// poll.displayResults.call(data1);
// poll.displayResults.call(data1, 'string');
// poll.displayResults.call(data2);
// poll.displayResults.call(data2, 'string');
