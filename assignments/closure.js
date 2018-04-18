// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let DondePantalones = 'where are my pants?';

function ask() {
  return DondePantalones;
}
console.log(ask());

// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.
  
const counter = (closure = 0) => {
  let val = closure;
  return function counter()  {
    val += 1; // val = val+1;
    return val;
  }
};

const newCounter = counter();
console.log(newCounter()); 
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let counter = 0;
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;
  let resObj = {increment , decrement};
  return resObj;
};

let digits = counterFactory();
console.log(digits.increment());
console.log(digits.increment());
