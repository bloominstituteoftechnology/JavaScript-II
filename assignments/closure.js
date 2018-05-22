// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let count = 1;
let user_counter = () => {
 return count++
};

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return user_counter();
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(user_counter());
console.log(user_counter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  var factory = {
    increment: function(){
      return count++;
    },
    decrement: function(){
      return count--;
    }
  };
  return factory;
};

let countObj = counterFactory();
console.log(countObj.increment());
console.log(countObj.increment());
console.log(countObj.increment());
