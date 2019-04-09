// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function yharnam() {
  const eileen = "Prepare yourself for the worst. There are no humans left. They're all flesh-hungry beasts, now.";
  console.log(`${eileen}`)

  function centralYharnam() {
      const connection = "Cathedral Ward";
      console.log(`Central Yharnam is the upper-class district of the Gothic city of Yharnam, and connectes directly to the ${connection}`)
  }
  centralYharnam();
}
yharnam();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
