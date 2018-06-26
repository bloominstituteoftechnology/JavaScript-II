// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function person(firstName, lastName) {
  return {
    getFirstName: function getFirstName() {
      return firstName;
    },
    getLastName: function getLastName() {
      return lastName;
    },
    getFullName: function getFullName() {
      return firstName + " " + lastName;
    },
    setFirstName: function setFirstName(fName) {
      firstName = fName;
    },
    setLastName: function setLastName(lName) {
      lastName = lName;
    }
  };
}
let someone = person("Bob", "Jr");
console.log(someone.getFirstName());
someone.setLastName("Smith");
console.log(someone.getFullName());

// Let's demonstrate Object Oriented Programming with private variables with the use of closures
// JavaScript is not like other traditional object oriented programming languages
// Object based programming is possible in JS but there are no classes per se but a class behaviour can
// be implemented as seen below. Note: ES6 has a class declaration syntax which is a syntactic sugar for the below implementation

function Person(firstName, lastName) {
  this.getFirstName = function getFirstName() {
    return firstName;
  };
  this.getLastName = function getLastName() {
    return lastName;
  };
  this.getFullName = function getFullName() {
    return firstName + " " + lastName;
  };
  this.setFirstName = function setFirstName(fName) {
    if (/^[A-Za-z]+$/.test(fName)) firstName = fName;
  };
  this.setLastName = function setLastName(lName) {
    if (/^[A-Za-z]+$/.test(lName)) lastName = lName;
  };
}
// The Person function above is a typical implementation of class behavior
// This is a class imitation, concepts like inheritance and polymorphism are still
// absent from this implementation. JS objects are linked differently.

// Create a new person
const batman = new Person("Bruce", "Wayne"); // The firstName and lastName variables are private to the class
// The outsiders don't know that batman is Bruce Wayne
console.log(batman.firstName);
// But batman knows his name ...
console.log(batman.getFullName());
// Unless Scarecrow confused him to change his name like so
batman.setFirstName("Thomas");
console.log(batman.getFullName());
// Again the important point here is that only batman can change his name

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => ++count;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count
  };
};

const sophiticatedCounter = counterFactory();
console.log(sophiticatedCounter.increment());
console.log(sophiticatedCounter.increment());
console.log(sophiticatedCounter.increment());
console.log(sophiticatedCounter.decrement());
console.log(sophiticatedCounter.decrement());
