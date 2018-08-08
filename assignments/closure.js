// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function writeName(firstName, lastName){
  let yourNameIs = "Your name is ";

  function writeFullName() {

    return yourNameIs + firstName + lastName;
  }

  return writeFullName();
}

writeName("Abdul", "Ahmad");


// ==== Challenge 2: Create a counter function ====

const newCounter = count => {
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return count += 1;
};

return counter();

};

newCounter();

// function newCounter(count) {

//   var count = 0;


// const counter = function() {
//       return count += 1;
// };

// return counter();

// };

// newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
