// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function eat(food){

  function fruit(){
    console.log(food);
  }
  fruit();
}
eat('apple');

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return () => (++count);

};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (cb) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
//   let count = 0;
  
//   let increment = () => {

//     return () => (++count);
//   }
//   let decrement = () => {

//     return () => (--count);
//   }

//   cb();
};

// console.log(counterFactory(increment));
