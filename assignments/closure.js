// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// const firstName = "Olivia";
// function fullName(fname) {
//   const lastName = "Osborn";
//   console.log(`Hi, my name is ${fname} ${lastName}`)
//   debugger; 

//   function addMiddle() {
//     const middleName = "Rose";
//     console.log(`Hi, my name is ${fname} ${middleName} ${lastName}`);
//     debugger;
//   }
//   addMiddle();
// }

// fullName(firstName);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.
// const counter = () => {
//   let count = 0;
//   return function() {
//     count = count + 1;
//     return count;
//   }
// };

// const newCounter = counter();
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
