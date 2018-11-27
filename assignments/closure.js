// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function itemStorage() {
  const item = 'heres one';
  const item2 = 'heres another';
  function itemPresenter() {
    console.log(`presenting an item: ${item}`);
  }
  itemPresenter();
}
itemStorage();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 1;
  return () => {
    return count ++;
  }
};
//counter();
// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 1;
  return {
    "increment" : () => count ++,
    "decrement" : () => count --
  };
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());

// const incrementCounterFactory = counterFactory().increment;
// console.log(incrementCounterFactory());
// console.log(incrementCounterFactory());
// console.log(incrementCounterFactory());
// console.log(incrementCounterFactory());

// const decrementCounterFactory = counterFactory().decrement;
// console.log(decrementCounterFactory());
// console.log(decrementCounterFactory());
// console.log(decrementCounterFactory());
// console.log(decrementCounterFactory());

