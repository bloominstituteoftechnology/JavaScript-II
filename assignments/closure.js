// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count++;
  return count;
};
// Example usage: const newCounter = counter();
const newCounter = counter(); // 1
const newCounter2 = counter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====


const counterFactory = num => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const obj = {
  increment: (num) => {
    return num + 1;
  }, 
  decrement: (num) => {
    return num - 1;
  },
}

  return obj.decrement(num);
  
};
console.log(counterFactory(2))
