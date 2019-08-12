// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function father() {
  const family = "Shockley";
  console.log(`I am Christopher ${family}`)

  function firstBorn() {
    console.log(`I am Kailyn ${family}`);

    function secondBorn() {
      console.log(`I am Dajon ${family}`);

      function nextBorn() {
        console.log(`I am Ariana ${family}`);

        function lastBorn() {
          console.log(`I am Deuce ${family}`);
        } //lastborn
        lastBorn();
      } //nextborn
      nextBorn();
    } //secondBord
    secondBorn();
  } //firstBorn
  firstBorn();
} //Father

father();


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