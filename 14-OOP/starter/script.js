'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Inefficient; creates copies of the same method unnecessarily
//   //   this.calcAge = function () {
//   //     const curYear = new Date().getFullYear();
//   //     return curYear - this.birthYear;
//   //   };
// };

// Prototypes
// Person.prototype.calcAge = function () {
//   const curYear = new Date().getFullYear();
//   console.log(curYear - this.birthYear);
// };

// Person.prototype.species = 'Homo sapiens';

// Person.hey = function () {
//   console.log(`Hey there`);
// };

// // Inheritance

// // Create the constructor
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Link the Student prototype to its parent prototype (Person)
// Student.prototype = Object.create(Person.prototype);

// // Carry on adding the prototype methods
// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I am a student studying ${this.course}`
//   );
// };

// const arthur = new Student('Arthur', 2018, 'Physics');
// arthur.introduce();
// arthur.calcAge();

// console.log(arthur instanceof Student);
// console.log(arthur instanceof Person);

// Student.prototype.constructor = Student;

// Person.hey();

// const jonas = new Person('Jonas', 1991);

// jonas.hey();

// console.log(jonas);

// const arthur = new Person('Arthur', 2018);
// const marisol = new Person('Marisol', 2018);
// const clinton = {};

// console.log(arthur);
// console.log(marisol);

// console.log(marisol instanceof Person);
// console.log(clinton instanceof Person);

// console.log("Marisol's age is " + marisol.calcAge());

// console.log(arthur.__proto__);
// console.log(arthur.species);
// console.log(arthur);
// console.log(arthur.hasOwnProperty('species'));
// console.log(arthur.hasOwnProperty('firstName'));
// console.log(arthur.__proto__.hasOwnProperty('species'));
// console.log(arthur.__proto__.hasOwnProperty('firstName'));

// console.log(arthur.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// const arr = [1, 2, 3, 4, 3, 2];

// // This is the array prototype
// console.log(arr.__proto__);

// // This is the object prototype
// console.log(arr.__proto__);

// // Extend functionality of an array; probably not a good idea
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// const Car = function (make, speed, maxSpeed) {
//   this.make = make;
//   this.speed = speed;
//   this.maxSpeed = maxSpeed;
// };

// Car.prototype.accelerate = function (amount = 10) {
//   if (this.speed === this.maxSpeed) {
//     console.log(`Already at max speed`);
//     return;
//   }
//   const oldSpeed = this.speed;
//   this.speed + amount > this.maxSpeed
//     ? (this.speed = this.maxSpeed)
//     : (this.speed += amount);
//   console.log(`Accelerating from ${oldSpeed} to ${this.speed}`);
// };
// //
// Car.prototype.brake = function (amount = 5) {
//   if (this.speed === 0) {
//     console.log(`Already stopped`);
//     return;
//   }
//   const oldSpeed = this.speed;
//   this.speed - amount < 0 ? (this.speed = 0) : (this.speed -= amount);
//   console.log(`Braking from ${oldSpeed} to ${this.speed}`);
// };
// //
// const BMW = new Car('BMW', 74, 150);
// const EV = function (charge, make, speed, maxSpeed) {
//   Car.call(this, make, speed, maxSpeed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo = 100) {
//   this.charge = chargeTo > 100 ? 100 : chargeTo;
// };

// EV.prototype.accelerate = function (amount = 20) {
//   if (this.speed === this.maxSpeed) {
//     console.log(`Already at max speed`);
//     return;
//   }
//   const oldSpeed = this.speed;
//   const oldCharge = this.charge;
//   const accelAmount =
//     this.speed + amount > this.maxSpeed ? this.maxSpeed - this.speed : amount;
//   this.speed += accelAmount;
//   this.charge -= accelAmount * 0.05;
//   console.log(
//     `Accelerating from ${oldSpeed} to ${this.speed}, with charge reducing from ${oldCharge} to ${this.charge}`
//   );
// };

// const tesla = new EV(90, 'Tesla', 75, 160);

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();

// const Person = class {};

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     const curYear = new Date().getFullYear();
//     return curYear - this.birthYear;
//   }

//   greet() {
//     return `Hey ${this.firstName}`;
//   }

//   get age() {
//     return this.calcAge();
//     // const curYear = new Date().getFullYear();
//     // return curYear - this.birthYear;
//   }

//   // Pattern with set and get to set property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there!');
//   }
// }

// class Student extends Person {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(
//       `My name is ${this.firstName} and I am a student studying ${this.course}`
//     );
//   }

//   calcAge() {
//     const age = new Date().getFullYear() - this.birthYear;
//     console.log(`I am ${age} years old but I feel like ${age}0`);
//   }
// }

// const arthur = new Student('Arthur Lee', 2018, 'Math');

// const marisol = new Person('Marisol Lee', 2018);

// console.log(marisol);
// console.log(marisol.calcAge());
// console.log(marisol.age);

// const Person = {
//   calcAge() {
//     const curYear = new Date().getFullYear();
//     return curYear - this.birthYear;
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const Student = Object.create(Person);

// Student.init = function (firstName, birthYear, course) {
//   Person.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I am a student studying ${this.course}`
//   );
// };

// const marisol = Object.create(Student);
// marisol.init('Marisol');

// console.log(marisol);

// marisol.init('Marisol', 2018, 'Biology');
// console.log(marisol);
// console.log(marisol.calcAge());

// class Car {
//   constructor(make, speed, maxSpeed) {
//     this.make = make;
//     this.speed = speed;
//     this.maxSpeed = maxSpeed;
//   }

//   accelerate(amount = 10) {
//     if (this.speed === this.maxSpeed) return `Already at max speed`;
//     const oldSpeed = this.speed;
//     this.speed + amount > this.maxSpeed
//       ? (this.speed = this.maxSpeed)
//       : (this.speed += amount);
//     return `Accelerating from ${oldSpeed} to ${this.speed}`;
//   }

//   brake(amount = 5) {
//     if (this.speed === 0) return `Already stopped`;
//     const oldSpeed = this.speed;
//     this.speed - amount < 0 ? (this.speed = 0) : (this.speed -= amount);
//     return `Braking from ${oldSpeed} to ${this.speed}`;
//   }

//   set speed(speed) {
//     speed >= 0 ? (this._speed = speed) : alert(`Speed must be 0 or higher`);
//   }

//   get speed() {
//     return this._speed;
//   }

//   get speedUS() {
//     return this.speed * 0.621371;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// //
// const BMW = new Car('BMW', 74, 150);

// console.log(BMW.brake(20));
// console.log(BMW.brake(1));
// console.log(BMW.brake());
// console.log(BMW.brake(2));
// console.log(BMW.brake());
// console.log(BMW.accelerate(40));
// console.log(BMW.accelerate(50));
// console.log(BMW.accelerate(1000));
// console.log(BMW.accelerate());
// console.log(BMW.accelerate());

// class Account {
//   // Public fields (on instances, not prototype)
//   locale = navigator.language;

//   // Private fields (on instances, not prototype)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     // Protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Hey! Welcome!`);
//   }

//   // Public interface (API)
//   // Public methods
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   // Private methods
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Clinton', 'USD', 4444, []);

// acc1.deposit(250);
// acc1.withdraw(170);
// acc1.requestLoan(1000);
// // console.log(acc1.#movements);  // Won't work, protected field
// // console.log(acc1.#pin); // Won't work, protected field
// // console.log(acc1.#approveLoan()); // Won't work, protected method

// console.log(acc1.getMovements());

// acc1.deposit(300).deposit(500).withdraw(350).requestLoan(2500).withdraw(2000);

// console.log(acc1.getMovements());
// console.log(acc1);

class Car {
  constructor(make, speed, maxSpeed) {
    this.make = make;
    this.speed = speed;
    this.maxSpeed = maxSpeed;
  }

  accelerate(amount = 10) {
    if (this.speed === this.maxSpeed) {
      console.log(`Already at max speed`);
      return this;
    }
    const oldSpeed = this.speed;
    this.speed + amount > this.maxSpeed
      ? (this.speed = this.maxSpeed)
      : (this.speed += amount);
    console.log(`Accelerating from ${oldSpeed} to ${this.speed}`);
    return this;
  }
  //
  brake(amount = 5) {
    if (this.speed === 0) {
      console.log(`Already stopped`);
      return this;
    }
    const oldSpeed = this.speed;
    this.speed - amount < 0 ? (this.speed = 0) : (this.speed -= amount);
    console.log(`Braking from ${oldSpeed} to ${this.speed}`);
    return this;
  }
}
//

class EV extends Car {
  #charge;

  constructor(charge, make, speed, maxSpeed) {
    super(make, speed, maxSpeed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo = 100) {
    const oldCharge = this.#charge;
    this.#charge = chargeTo > 100 ? 100 : chargeTo;
    console.log(`Battery charged from ${oldCharge} to ${this.#charge}`);
    return this;
  }

  accelerate(amount = 20) {
    if (this.speed === this.maxSpeed) {
      console.log(`Already at max speed`);
      return this;
    }
    const oldSpeed = this.speed;
    const oldCharge = this.#charge;
    const accelAmount =
      this.speed + amount > this.maxSpeed ? this.maxSpeed - this.speed : amount;
    this.speed += accelAmount;
    this.#charge -= accelAmount * 0.05;
    console.log(
      `Accelerating from ${oldSpeed} to ${
        this.speed
      }, with charge reducing from ${oldCharge} to ${this.#charge}`
    );
    return this;
  }
}

const BMW = new Car('BMW', 74, 150);
const tesla = new EV(90, 'Tesla', 75, 160);

tesla
  .brake()
  .brake()
  .accelerate(50)
  .chargeBattery(99)
  .brake(80)
  .brake(100)
  .brake(30)
  .accelerate(75)
  .accelerate(175)
  .accelerate(50)
  .chargeBattery();
