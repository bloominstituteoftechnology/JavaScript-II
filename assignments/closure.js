// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function books (){
  const greatBook1 = "The Power";
  const greatBook2 = "Skeleton Crew";
  const greatBook3 = "The Giver";
  listBooks();
  function listBooks(){
    console.log(`Some good books are ${greatBook1}, ${greatBook2}, and ${greatBook3}`);
  }
}
books();

// ==== Challenge 2: Create a counter function ====
const counting = () => {
    let counter = 0;

    function result () {counter += 1; return counter}
    return result;
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counting();
newCounter();
newCounter();
console.log(newCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
