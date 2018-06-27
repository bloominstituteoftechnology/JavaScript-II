// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const greeting = () => {
  let sayHi = "Hello, welcome to the world of closures."
  let hello = function(){
    console.log(sayHi)
  };
  return hello;
}
const HelloThere = greeting();
greeting();
HelloThere();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  function incrementNumber(){
    return count++;
  }
  return incrementNumber;
};
const newCounter = counter();
newCounter();



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  const counterFactory = () => {
  let counter = 0;
  
  return {
    increment: function(){
      counter ++;
      return counter;
    },
    decrement: function(){
      counter --;
      return counter;
    }
  }
};
const counting = counterFactory();
counting.increment();

