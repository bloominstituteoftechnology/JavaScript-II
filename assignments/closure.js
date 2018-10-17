// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function speak() {
  let name = "John";
  function displayName() {
    alert(`Hello my name is ${name}`);
  }
  return displayName;
}
const speakNow = speak();
speakNow();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let myValue = 0;
  
  myCounter = function increment () {
    myValue = myValue + 1;
    console.log(myValue);
  }
  return myCounter;
};

let myVar = counter();
console.log(myVar());
console.log(myVar());
console.log(myVar());


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
// console.log(newCounter);

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let baseValue = 0;

  theCounter = function change (increment, decrement) {
    baseValue 
  }
};


