// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====

// Return a function that when invoked increments and returns a counter variable.

const counter = () => {
  let count = 0;

  const addOne = () => {
    return count += 1;
  }
  return addOne;
}
let newCounter = counter();
console.log(newCounter());
newCounter();
console.log(newCounter())

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====


let funcFactory = (() => {
  let value = 0;
  alteredNum = (x) => {
    value += x;
    return value;
  }
  return {
    increment: () => {
      alteredNum(1);
      return value;
    },
    decrement: () => {
      alteredNum(-1);
      if (value === 0) {
        return `Nothing to see here!`
      } else {
        return value;
      }
    }
  }
})();
funcFactory.increment();
funcFactory.decrement();
funcFactory.decrement();

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.