// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const outer = () => {
  const closureVar = 'var'
  const inner = () => {
    console.log(closureVar)
  }
  inner()
}
outer()

// ==== Challenge 2: Create a counter function ====
function counter() {
  let count = 0
  return () => ++count
}

const newCounter = counter()
console.log(newCounter())
console.log(newCounter())

const anotherCounter = counter()
anotherCounter()
anotherCounter()

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  return {
    increment: () => ++count,
    decrement: () => --count
  }
}

const superCounter = counterFactory()
console.log(superCounter.increment())
console.log(superCounter.increment())
console.log(superCounter.increment())
console.log(superCounter.increment())
console.log(superCounter.decrement())
console.log(superCounter.decrement())
console.log(superCounter.decrement())
console.log(superCounter.decrement())
console.log(superCounter.decrement())
console.log(superCounter.decrement())
console.log(superCounter.decrement())

