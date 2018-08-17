// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const whatUp = function() {
  let talk = "Howdy pardner!!!";
  const subFunc = function () {
    console.log(talk);
  }
subFunc()
}
whatUp()

const skeelo = function () {
  let greet = "I wish I was a little bit taller.";
  let second_greet = "I wish I was a baller."
  const add = () => {console.log(second_greet + greet)};
    add();
}
skeelo()
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
let count = 0;
const add = () => {
  count++; return count;
}
  return add;

};

let newCount = counter()
console.log(newCount())
console.log(newCount())
console.log(newCount())
console.log(newCount())


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
    return {
      increment: function increment() {return ++counter;},
    
      decrement: function decrement() {return --counter;} 
  } 
}
let countFac = counterFactory();
console.log(countFac.increment())
console.log(countFac.increment())
console.log(countFac.increment())


