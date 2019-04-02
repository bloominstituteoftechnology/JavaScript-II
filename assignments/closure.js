// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// const myDesk = function() {
//   computer = "my very fast computer";
//   console.log(`On my desk I have a computer. It is ${computer}.`)
//   drawer = function() {
//     cable = "old USB cable"
//     console.log(`In my desk drawer I have a cable, which we can call "${cable}". It is there to be used with ${computer}.`) 
//   }
//   drawer();
// }
// myDesk();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const externalCountTester = 0;

const counter = (function() {
  let i = 0;
  return function() {
    i++;
    return i;
  }
})();


var add = (function () {
  var counter = 0;
  return function() {
    counter += 1;
    return counter
  }
})();




// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = {
  "increment": (function() {
    let i = 0;
    return function() {
      i++;
      return i;
    }
  })(),
  "decrement": (function() {
    let i = 0;
    return function() {
      i--;
      return i;
    }
  })(),
};

const otherCounterFactory = {
  "i": 0,
  "increment": function() {
    this.i = this.i + 2;
    return this.i;
  },
  "decrement": function() {
    this.i = this.i - 1;
    return this.i;
  }
};