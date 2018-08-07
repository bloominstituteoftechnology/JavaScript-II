// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function characterActions(action) {
  let charName = "bob";
  function attack() {
    let damage = 12;
    console.log(charName + " deals " + 12 + " damage to their enemy!");
  }

  function run() {
    console.log(charName + " ran away safely");
  }

  if(action === "attack") {
    attack();
  } else if (action === "run") {
    run();
  } else {
    console.log("What you talking about " + charName + "?");
  }
}
characterActions("attack");
characterActions("run");
characterActions("eat");

// ==== Challenge 2: Create a counter function ====

const counter = function() {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const inc = function() {count++; return count}
  return inc;
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
