// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const simpleClosure = () => {
  debugger;
  const closures = "closures";
  const closuresAreCool = () => {
    debugger;
    console.log(`${closures} are cool!`)
  }
  closuresAreCool();
}
simpleClosure();



// ==== Challenge 2: Create a counter function ====
const counter = (count = 0) => increment = () => {
  count++;
  return count;
}
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2




/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => objectFunction = {
  count: 0,
  increment: () => {
    objectFunction.count++
    return objectFunction.count;
  },
  decrement: () => {
    objectFunction.count--
    return objectFunction.count;
  }
}

const counter2 = counterFactory();

console.log(counter2.increment());
console.log(counter2.decrement());

