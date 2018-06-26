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
