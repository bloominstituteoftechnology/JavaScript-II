// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function basicMath (a, b) {
  let totalSum = "Your total is, ";

  function addTogether () {
    return totalSum + (a + b);
  }

  return addTogether();


}

basicMath(10, 5);



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

// Return a function that when invoked increments and returns a counter variable.

const counter = () => {
let count = 0;
  return function () {


    return count++;
  }
};

const newCardCount = counter();
console.log(newCardCount());
console.log(newCardCount());
console.log(newCardCount());
console.log(newCardCount());
console.log(newCardCount());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

let counter1 = counterFactory();
let counter2 = counterFactory();
console.log(counter1.value());

counter1.increment();
counter1.increment();
console.log(counter1.value());

counter1.decrement();
console.log(counter1.value());
console.log(counter2.value());