// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let portal = "Earth";

function change_location() {
  portal = "Mars";

  function change_again() {
    console.log(portal);
    portal = "Jupiter";

    function change_last() {
      console.log(portal);
      portal ="Saturn";
      return portal;
    }
    return change_last();
  }
  return change_again();
}

console.log(portal); // Earth
change_location(); // Mars and Jupiter
console.log(portal); // Saturn

// ==== Challenge 2: Create a counter function ====

const counter = () => {

  // Return a function that when invoked increments and returns a counter variable.

  let count = 0;

  return () => {
    count = count + 1;
    return count;
  };
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();

console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 0;

  let add_or_sub = {
    "increment": () => {count = count + 1; return count},
    "decrement": () => {count = count - 1; return count}
  };

  return add_or_sub;
};

const inc_dec = counterFactory();

console.log(inc_dec.increment()); // 1
console.log(inc_dec.increment()); // 2
console.log(inc_dec.increment()); // 3
console.log(inc_dec.increment()); // 4

console.log(inc_dec.decrement()); // 3
console.log(inc_dec.decrement()); // 2
console.log(inc_dec.decrement()); // 1
console.log(inc_dec.decrement()); // 0
