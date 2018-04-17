// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name = "Max";
function getName(){
  return name;
}
getName(); //?

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let x = 0;
    return () => {
      x++;
      return x;
  }
}

const countForMe = counter(); //?
console.log(countForMe())
console.log(countForMe())
console.log(countForMe())

// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let x = 0;
  return {
    increment: () => (++x),
    decrement: () => (--x),
  };
  
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const UpOrDown = counterFactory(); 
console.log(UpOrDown.increment)
console.log(UpOrDown.increment()) 
console.log(UpOrDown.increment()) 
console.log(UpOrDown.increment()) 
console.log(UpOrDown.increment()) 
console.log(UpOrDown.decrement()) 
console.log(UpOrDown.decrement()) 
console.log(UpOrDown.decrement()) 