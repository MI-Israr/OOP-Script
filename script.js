"use strict";

const Users = function (firstname, birthYear) {
  (this.firstname = firstname), (this.birthYear = birthYear);
};

const jonas = new Users("jonas", 1991);
const smith = new Users("smith", 1998);
const harry = new Users("harry", 2003);

console.log(jonas, smith, harry);
