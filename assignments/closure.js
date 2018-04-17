// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const square = (x) => {
  // Return a function that when invoked increments and returns a counter variable.
  function squareinc(){
    return x = x*x;
  }
  return squareinc;
};
const newSquare = square(5);
console.log(newSquare())
console.log(newSquare())
console.log(newSquare())
console.log(newSquare())
console.log(newSquare())
console.log(newSquare())
console.log(newSquare())
console.log(newSquare())
console.log(newSquare())





// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var cv = 0;
  function counterinc(){
    return cv++;
  }
  return counterinc;
};
const newCounter = counter();
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let cv =0;
  return{
    "increment":function increment(){
      return cv++;
    },
    "decrement":function increment(){
      return cv--;
    } 
  }
};
