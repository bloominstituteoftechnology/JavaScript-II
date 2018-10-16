console.log(`\nCLOSURE`);
// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const multiply = function(a) {
  return function(b) {
    return a * b;
  }
}

const multiplyByTwo = multiply(2);
console.log(`2 x 2 = ${multiplyByTwo(2)}`);
console.log(`10 x 2 = ${multiplyByTwo(10)}`);

const multiplyByFive = multiply(5);
console.log(`2 x 5 = ${multiplyByFive(2)}`);
console.log(`10 x 5 = ${multiplyByFive(10)}`);


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return e => {
    counter++;
    console.log(`Current counter: ${counter}`);
  };
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;

  return {
    increment: e => ++counter,
    decrement: e => --counter
  }
};

let myCounter = counterFactory();
console.log('\n===Running myCounter===');
console.log('increment: ', myCounter.increment());
console.log('increment: ', myCounter.increment());
console.log('increment: ', myCounter.increment());
console.log('decrement: ', myCounter.decrement());
console.log('decrement: ', myCounter.decrement());
console.log('decrement: ', myCounter.decrement());
