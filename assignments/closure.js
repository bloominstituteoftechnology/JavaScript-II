// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

/* Here's one from the precourse days */

function room() {
  let personA = 34;
  return function() {
    let personB = 35;
    return personA + personB;
  }
}

let whatAreTheyDoing = room();
console.log(whatAreTheyDoing());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count = 0;
  return function() {
    count++;
    return count;
  }
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
  count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  }
};

let letsCount = counterFactory();
console.log(letsCount);
console.log(letsCount.increment());
console.log(letsCount.increment());
console.log(letsCount.decrement());
console.log(letsCount.decrement());
console.log(letsCount.decrement());