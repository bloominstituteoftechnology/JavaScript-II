// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myName() {
  let name = 'Kevin Sooter';

  function goals() {
    let myLanguage = 'JS';
    console.log(name + ' is a Software Dev in the making');

    function languageOfChoice() {
      console.log(
        name + ' likes to use ' + myLanguage + ' to create software '
      );
    }

    languageOfChoice();
  }

  goals();
}

myName();

// ==== Challenge 2: Create a counter function ====
const counter = (() => {
  // Return a function that when invoked increments and returns a counter variable.
  let newCounter = 0;
  return () => {
    newCounter += 1;
    return newCounter;
  };
})();

counter();

console.log(counter());
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
