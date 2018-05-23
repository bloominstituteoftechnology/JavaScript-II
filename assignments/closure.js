// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let Me = 'Michael'
function truth() {
return (Me + ' has much to learn about Javascript!');
}
console.log(truth()); //?


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
let count = 0;
const counter = () => {
  count++;
  return count;
};
console.log(counter());
console.log(counter());
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const counterFactory = () => {
    let count = 0;
    return {
      increment: () => (++count),
      decrement: () => (--count),
    };

    const newCounterFactory = counterFactory();
    newCounterFactory.increment(); // 1
    newCounterFactory.decrement(); // 0
    newCounterFactory.decrement(); // -1
