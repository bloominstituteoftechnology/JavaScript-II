// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let alpha = function () {
  let greet = "what up yo!?!";
  function sub_alpha() {
    console.log(greet);
  }
  sub_alpha();
}
alpha()


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
let count = 0;
const add = () => {count++; 
  return count;};
return add;
};
let newCounter = counter()
console.log(newCounter())
console.log(newCounter())
console.log(newCounter());
console.log(newCounter());
console.log(newCounter())
console.log(newCounter())
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
//object key pairs...
const counterFactory = () =>
 {let count = 0;
  return {
    increment: function increment() {
      return ++count;
    },
    decrement: function decrement() {
      return --count;
    }
  }
};
let newCount = counterFactory();
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
console.log(newCount.increment())
console.log(newCount.increment())
console.log(newCount.increment())
console.log(newCount.decrement())
