// let person1 = { firstName: 'dev', lastName: 'Mahato' };

// console.log(person1);

// function Person(lastName, firstName) {
//   //this ={}
//   this.lastName = lastName;
//   this.firstName = firstName;
//   //   this.fullName = function () {
//   //     console.log(this.firstName + ' ' + this.lastName);
//   //   };
// }

// // prototype = this is object for every function,

// Person.prototype.fullName = function () {
//   return this.firstName + ' ' + this.lastName;
// };

// const person2 = new Person('Welker', 'John');
// const person3 = new Person('Mahato', 'Brham Dev');
// console.log(person2.fullName());
// console.log(person3.fullName());

let person1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

let person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

// using factory function

function createPerson(firstName, lastName) {
  const getFullName = function () {
    return firstName + ' ' + lastName;
  };
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName,
  };
}

const p1 = createPerson('Robert', 'Welker');

console.log(p1.getFullName());
