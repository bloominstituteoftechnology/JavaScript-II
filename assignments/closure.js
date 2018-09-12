// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function mvp(){
  const name = 'Mookie Betts';
  function announce(){
    console.log(`${name} will win the MVP award this year.`);
  }
  announce();
}


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  function addOne() {
    count += 1;
    return count;
  }
  return addOne;
};

const newCounter = counter();
newCounter();
newCounter();
// Example usage: const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 1
console.log(newCounter()); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let counterObj = {
    counter: count,
    increment: function() {
      this.counter++;
      return this.counter;
    },
    decrement: function() {
      this.counter--;
      return this.counter;
    }

  }
  return counterObj;
};

let counterA = counterFactory();
console.log(counterA.increment());
console.log(counterA.increment());
console.log(counterA.increment());
console.log(counterA.increment());
console.log(counterA.decrement());
console.log(counterA.decrement());
console.log(counterA.decrement());
console.log(counterA.decrement());
console.log(counterA.decrement());
console.log(counterA.decrement());

