// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let position = "Seated";
let state = "in anticipation.";

let status = () => {return `${position} ${state} Hooray!`;};

console.log(status());

// ==== Challenge 2: Create a counter function ====
let num = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return num +=1;
};

const newCounter = counter;

newCounter();
newCounter();
newCounter();
newCounter();


console.log(num);
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let num =0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
    return {
    increment: () => {return num+=1;},
    decrement: () => {return num-=1;}
    };
  };

  let x = counterFactory();

  x.decrement();
  x.decrement();
  console.log(num);
