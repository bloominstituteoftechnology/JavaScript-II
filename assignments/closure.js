// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function sayGoodnight(farewell) {
  const myFarewell = farewell;
  const name = 'Sydney';
  console.log(`${myFarewell}. See you soon!`);

  function response() {
    const yourFarewell = 'Bye! Lovely to see you.';
    console.log(`${myFarewell} ${name} ${yourFarewell}`);
  }

  response();
}

console.log(sayGoodnight('Goodnight'));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => ++count;
};

const myCounter = counter();

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
