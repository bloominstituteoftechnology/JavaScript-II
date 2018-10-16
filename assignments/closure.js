// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function favCandy(nameCandy) {
  const candy = nameCandy;
  console.log(`My favorite candy is ${candy}.`)

  function secondFav() {
    const candyPhrase = "I know it's bad, but it tastes so good.";
    console.log(`${candy}... ${candyPhrase}`)
  };

  secondFav();

};

favCandy("Reese\'s")


// ==== Challenge 2: Create a counter function ====
// let counter = 0;

// function add() {
//   counter +=1;
// };

// add();
// add();
// add();
// add();

// console.log(counter);

const counter = () => {
  let count = 0;
  
  return () => (++count);
  // Return a function that when invoked increments and returns a counter variable.
};

// Example usage: const newCounter = counter();
const newCounter = counter();
console.log(newCounter()) // 1
console.log(newCounter()) // 2
console.log(newCounter()) // 3
console.log(newCounter()) // 4
console.log(newCounter()) // 5

// ========== ^ this was very difficult for me for some reason. 



  // Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
