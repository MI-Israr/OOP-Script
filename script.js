"use strict";

const Person = function (firstname, birthYear) {
  (this.firstname = firstname), (this.birthYear = birthYear);
};

const jonas = new Person("jonas", 1991);
const smith = new Person("smith", 1998);
const harry = new Person("harry", 2003);

console.log(jonas, smith, harry);
