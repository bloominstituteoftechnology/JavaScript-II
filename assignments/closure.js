// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const funcA = () => {
  console.log(`This is function one!`);

  const funcB = () => {
    console.log(`This is function two!`);
  }
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  const countUp = () => {
    count = count + 1;
    console.log(count);
  }
  countUp();
};
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  const controller = {
    increment: () => {
      count = count + 1;
      return count;
    },

    decrement: () => {
      count = count - 1;
      return count;
    }
  }
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};