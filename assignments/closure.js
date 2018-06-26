// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const x = 3;
function cb() {
  let y = 4;
  return function () {
    let result = y + x;
    return result;
  }
}

let whatNumber = cb();
whatNumber(); //?



// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  return () => {
    count++;
    return count;
  }
  // Return a function that when invoked increments and returns a counter variable.
};

const newCounter = counter();
newCounter(); //?
newCounter(); //?


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let newCount = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    increment: function () {
      newCount++;
      return newCount;
    },
    decrement: function () {
      newCount--;
      return newCount;
    }
  };
};

let newC = counterFactory();
console.log(newC.increment());
console.log(newC.increment());
console.log(newC.decrement())

