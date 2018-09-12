// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function choreBoss(name, chore) {
  const worker = name;
  const job = chore;

  console.log(`Attention, ${worker}!`);

  function demand(chore) {
    console.log(`Hey, ${worker}! It's your turn to ${chore}!`);
  }
  demand(chore);
}

choreBoss("Jimmothy", "mop the floors");

// ==== Challenge 2: Create a counter function ====
const counter = num => {
  // Return a function that when invoked increments and returns a counter variable.
  let inc = 0;
  return function plusOne(num) {
    return (inc += num);
  };
};

newCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(newCounter(1));
console.log(newCounter(1));
console.log(newCounter(1));
console.log(newCounter(1));
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    }
  };
};

const newCounterFactory = counterFactory();

console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
