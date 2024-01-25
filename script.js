"use strict";

// const Person = function (firstName, birthYear) {
//   (this.firstName = firstName), (this.birthYear = birthYear);
// };

// const jonas = new Person("jonas", 1991);
// const smith = new Person("smith", 1998);
// const harry = new Person("harry", 2003);

// console.log(jonas, smith, harry);

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// jonas.calcAge();
// smith.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(smith));
// console.log(Person.prototype.isPrototypeOf(Person));

// .prototype is actually the .prototypeOfLinkedObjects

// Person.prototype.species = "Homo Sapiens";

// console.log(jonas.species, smith.species, harry.species);
// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed}km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed}km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
