// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function name() {
  const name = 'Brandon';
  console.log(`My name is ${name}`)

  function lastName() {
    const lastName = 'Lent'
    console.log(`My first name is ${name} and my last name is ${lastName}`);
  }
  return lastName();
}
name();

// ==== Challenge 2: Create a counter function ====
let total = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let total = 0;
  return function () {
    total++;
    console.log(total);
    return total;
  }
};

const newCounter = counter();
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = (counter) => {

  const object = {
    increment: () => {
      console.log(counter);
      return counter;
    },
    decrement: () => {
      return counter -= counter;
      
    }
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return object;
};
console.log(counterFactory(5).decrement());
