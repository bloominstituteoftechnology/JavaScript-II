// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let count = 0;
    return () => {
      count++;
      return count;
    }
}

const newCounter = counter();

newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0;
  return {
    increment : function increment() {
      return ++num;
    },
    decrement : function decrement() {
      return --num;
    }
  }
}

let countBy1 = counterFactory();

console.log(countBy1.increment());
console.log(countBy1.decrement());
console.log(countBy1.decrement());