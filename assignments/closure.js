// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const taco = meat => {
  const typeOfmeat = meat;

  console.log(`On my tacos I like ${typeOfmeat} `);

  const sandWitch = meat => {
    console.log(`On my sandwitch I like ${typeOfmeat}`);
  };
  sandWitch('ham');
};
taco('beef');

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let count = 0;
  return (add = () => {
    count += 1;
    return count;
  });
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;
  return (add_subtract = {
    increment: () => {
      counter += 1;
      return counter;
    },

    decrement: () => {
      counter -= 1;
      return counter;
    }
  });

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

console.log(counterFactory().increment());
console.log(counterFactory().decrement());
