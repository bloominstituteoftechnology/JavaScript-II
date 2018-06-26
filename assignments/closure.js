// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function newCounter() {
    count += 1;
    return count;
  }
};
// creating a variable that is set to the return value (function) of counter () which is newCounter()
let incremetor = counter();
// if we console.log(incrementor) js would return function newCounter () {count += 1; return count}; 
// if we call incrementor() then the count variable will look outward and find out what value count is currently set to, then it will update that value by 1 then return the updated number
console.log(incremetor())
console.log(incremetor())
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0; 
  return {
    increment: function() {
      counter += 1;
      return counter;
    },
    decrement: function() {
      counter -= 1;
      return counter;
    }
  }
};
// assiging the closure to a new function that will have access to the object methods and the counter variable;
let cFunc = counterFactory()
// incrementing the counter three times 
console.log(cFunc.increment()) // 1 
console.log(cFunc.increment()) // 2
console.log(cFunc.increment()) // 3
// decremething the counter
console.log(cFunc.decrement()) // 2