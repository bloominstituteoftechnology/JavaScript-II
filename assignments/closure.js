// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let simpleClosure = (x) => {
  return (y) => {
    return x + y;
  }
}

let add5 = simpleClosure(5);
console.log(add5(3));


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var count = 0;
  return () => {count += 1; return count};
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: () => {
      counter ++;
      return counter;
    },
    decrement: () => {
      counter --;
      return counter;
    }
  }
};

const test = counterFactory();
console.log(test.increment());
console.log(test.decrement());


