// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function name(person) {
  function displayName() {
    console.log(`Hi ${person}!`);
  }
  return displayName;
}

let hiAbi = name('Abi');
hiAbi();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let total = 0;
  function count() {
    console.log(++total);
  }

  return count;
  // Return a function that when invoked increments and returns a counter variable.
};

let newCounter = counter();
newCounter();
newCounter();
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let total = 0
  return {
    increment: () => {
      return ++total;
    },
    decrement: () => {
      return --total;
    }
  }
}

let counting = counterFactory();
console.log(counting.increment());
counting.increment();
counting.increment();
counting.increment();
counting.increment();
console.log(counting.increment());
console.log(counting.decrement())
