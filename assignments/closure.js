// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayName(nameParam) {
  const name = nameParam;
  const closure = 'closure';
  console.log(`Hello, my name is ${name} and this is an example of ${closure}!`);

  function test1() {
    const item1 = "What's up";
    console.log(`${item1}, this is example one of ${closure}!`)

    function test2() {
      const item2 = "we're nesting functions and creating";
      console.log(`${item1}, ${item2} ${closure}!`)
    }
    test2();
  }
  test1();
}
sayName('Joseph');

// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
 //newCounter(); // 1
 //newCounter(); // 2
 const counter = () => {
   let count = 0;
   return () => (++count);
 }

 const newCounter = counter();
 newCounter();
 newCounter();
 console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const counterFactory = () => {
    let count = 0;
    let increment = () => ++count;
    let decrement = () => --count;
    let countObject = {
      increment, decrement
    }
    return countObject;
  }

  const newCounter2 = counterFactory();

  console.log(newCounter2.decrement());
  console.log(newCounter2.decrement());
  console.log(newCounter2.increment());
  console.log(newCounter2.increment());
  console.log(newCounter2.increment());
  console.log(newCounter2.increment());
