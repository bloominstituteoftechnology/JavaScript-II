// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function fullName() {
  const firstName = 'Max';
  function together() {
    const lastName = 'Kajiwara';
    console.log(firstName + ' ' + lastName);
  }
  together();
}

fullName();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const counterFunction = () => {
    count++;
    return count;
  }
  return counterFunction;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const incDec = {
    increment: () => {count++; return count},
    decrement: () => {count--; return count}
  }
  return incDec;
};

const incDecCounter = counterFactory();
console.log(incDecCounter.increment());
console.log(incDecCounter.increment());
console.log(incDecCounter.decrement());
console.log(incDecCounter.decrement());
console.log(incDecCounter.increment());