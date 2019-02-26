// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const hello = 'My name is Marc!';
function returnHello () {
  return hello;
}
returnHello(); 
console.log(hello);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 5;
  return function () {
    count = count + 5;
    return count;
  }
};

const newCounter = counter();
console.log(newCounter()); // 10 
console.log(newCounter()); // 15

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
//   let count = 5;
//   return function () {
//     count = this.crement;
//     return  this.crement;
//   }
// };

// const crement = {
// increment (vfAttr) {
//   this.crement = vfAttr.crement + 2;
//   return count;
// },
// decrement () {
//   count = count - 3;
//   return count;
// },
// };

// const newCounterFactory = counter();
// console.log(newCounterFactory.crement()); // 10 
// console.log(newCounterFactory()); // 15