// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const number = 1;

function first (number) {
  const math = number;
  console.log(math);
   //debugger;

  function second() {
    const moreMath = 5;
    console.log(moreMath + math);
    //debugger;

    function third() {
      const moreMoreMath = 8;
      console.log(moreMath + moreMoreMath + math);
      //debugger;
    }
    third();
  }
second();
}
first();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let accumulator = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  console.log(accumulator++);

};
counter();
counter();
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  let factoryCount = 0;
  const increment = function () {
    return ++factoryCount;
  }
  const decrement = function () {
    return --factoryCount;
  }

  return {
    increment: increment,
    decrement: decrement
  };

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
let invoked = counterFactory();

console.log(invoked.increment());
console.log(invoked.increment());
console.log(invoked.increment());
console.log(invoked.increment());
