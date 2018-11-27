// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function describeCar(color) {
  const carColor = color;
  console.log(`I have a ${carColor} car.`);
  // debugger;

  function carSpeed() {
    const speed = "super fast";
    console.log(`My ${carColor} is ${speed}!`);
    // debugger;
  }
}

describeCar("red");

// ==== Challenge 2: Create a counter function ====

let current = 0;
const counter = num => {
  console.log(current);
};

function newCounter(amount, cb) {
  current += amount;
  return cb(current);
}

newCounter(1, counter);
newCounter(1, counter);
newCounter(2, counter);

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
