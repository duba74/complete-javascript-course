'use strict';

function calcAge(birthYear) {
  // console.log(firstName);  // Won't work because it sees the variable in the function scope so throws error before checking the global scope?
  const age = 2021 - birthYear;
  const firstName = 'Arthur';
  function printAge() {
    let output = `${firstName}, If you had your birthday this year already, you are ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Marisol';
      var string = `You are a millenial, ${firstName}`;
      console.log(string);
      function add(a, b) {
        return a + b;
      }
      console.log(add(1, 5));
      output = `New output`;
    }
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Clinton';
calcAge(1986);
