// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myName(name){
  const nameHolder = name;
  console.log(`My name is ${nameHolder}`);

  function sport() {
    const weightTraining = "My favorite hobby is weight training.";
    console.log(`My name is ${nameHolder}. ${weightTraining}` )

    function pets() {
      const goldenDoodle = "I want to get a golden doodle.";
      console.log(`My name is ${nameHolder}. ${weightTraining} And ${goldenDoodle}`);
    }
    pets();
  }
  sport();
}

myName("Levi");

// ==== Challenge 2: Create a counter function ====
const counter = (function() {
    let count = 0;
    return function() {
        return ++count;
    }
  } ());

  console.log(counter());
  console.log(counter());
  console.log(counter());
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
