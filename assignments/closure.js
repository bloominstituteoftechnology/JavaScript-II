// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function spock(greeting) {
  const hello = (greeting);
  console.log(hello);

  function neelix() {
    const sayHello = 'Howdy';
    console.log(`${hello} but I say ${sayHello}`);

    function phlox() {
      const sayHi = 'How do you do?';
      console.log(`${hello} but I say ${sayHello} and I say ${sayHi}`)
    }
    phlox();
  }
  neelix();
}
spock('Live Long And Prosper');

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => (++count);
};
const newCounter = counter();
// Example usage: const newCounter = counter();
 console.log(newCounter()); // 1
 console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
