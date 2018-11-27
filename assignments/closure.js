// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const addTwoTwice = function (num) {
  const numValue = num;
  console.log(numValue + 2);
  function addTwoAgain () {
    console.log(numValue + 4);
  }
  addTwoAgain();
}
addTwoTwice(3);
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function () {
    return ++count;
  }
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    count: 0,
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    }
  }
};
