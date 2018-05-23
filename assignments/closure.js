// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function topFunction() {
  let x=0;
  return () => {
    x++
    return x;
  }
}
let something = topFunction();
console.log(something());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
let counter = 0;
  // let car = {
  //   "make" : "subaru",
  //   "model" : "impreza",
  //   "color" : "silver",
  //   "honk" : console.log('Car honks'),
  // };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let obj = {
    
  }
};
