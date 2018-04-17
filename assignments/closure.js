// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let myFunc = () => {
//   let closure = 10;
//   return () => {
//     closure-- ;
//     return closure;
//   }
// }
// const myFunc2 = myFunc();
let kitten = () => {
  let myCat = {
    firstName : 'Mr',
    lastName : 'Grimm'
};

// console.log(myFunc)
  let kitten = () => {
    return `hello ${myCat.firstName} ${myCat.lastName}`;
  }
  return kitten();
};
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
let counter = 0;
const newCounter =>{
for(let i = 0; i < counter.length; i++)  counter()
}
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

let counter = 0; // ??? I don't know what i'm doing
const newCounter =>{
for(let i = 0; i < counter.length; i++)  counter()
};
return counter;
let counter = 0;
const newCounter =>{
for(let i = 0; i < counter.length; i--)  counter()
}
return counter;
};
