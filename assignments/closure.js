// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function nameOfFather(name) {
let myFathersName = name;
    return function speakName(){
      console.log(`My father's name is ${myFathersName}`);
    }
}

const sayName = nameOfFather('Blabbert');
sayName();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let currentNum = 0;
  return function incrementer(){
    console.log(currentNum += 1);
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
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
