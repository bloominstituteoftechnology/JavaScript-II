// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// function sum(a) {
//   a;

//   function inside(b) {
//     b;
//     console.log(a + b);
//   }
//   return inside;
// }

function sum(a) {
  a;
  console.log('i\'m the outter function')
  return function (b) {
    b;
    return (a + b);
  }
}

var addTwo = sum(2);
//console.log(sum(), 'test')
console.log(addTwo())
console.log(addTwo(1));
console.log(addTwo(4))


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  let counter = 0;

  function count() {
    counter++;
    return counter;
  }
  return count;

  // Return a function that when invoked increments and returns a counter variable.
};

console.log(counter(), 'counter');
// Example usage: const newCounter = counter();
const newCounter = counter();
console.log(newCounter(), 'newCounter'); // 1
console.log(newCounter(), 'newCounter'); // 2
newCounter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  let counter = 0;
  return {
    increment: () => console.log(counter++),
    decrement: () => console.log(counter--)
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

console.log(counterFactory());
//const counter = counterFactory();
const score = counterFactory()
score.increment();
score.decrement();
score.decrement();
score.decrement();
score.decrement();
score.increment();
score.increment();
score.increment();
score.increment();