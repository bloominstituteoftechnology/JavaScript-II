// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const multiplier = () => {
  let multiple = 2;
  return function() {
    multiple = multiple * 2;
    return multiple;
  }
};

const newMultiple = multiplier();
console.log(newMultiple());
console.log(newMultiple());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.


  
  let count = 2;
    var counter = () => {
      
      count = count + 1;
      return count;
    }
    return counter;
  };

  const myCounter = 
  console.log();
  console.log();

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let countChallenge4 = 0;
  var object1
  return object1 = [decrement = function() {
    countChallenge4 = countChallenge4 - 1;
    return countChallenge4
  } ,
  increment = function() {
    countChallenge4 = countChallenge4 + 1;
    return countChallenge4
  } ]

};
