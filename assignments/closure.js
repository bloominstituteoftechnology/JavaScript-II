// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let closure = () => {
  let num = 0
  let closure2 = () => {
    let num = 1
    console.log(num)
  }
  console.log(num)
}
closure()

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  const increment = () => {
    return ++count
  }
  return increment()
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter()
console.log(newCounter)
console.log(newCounter)

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  const factoryObj = {
    increment: () => {
      return ++count
    },
    decrement: () => {
      return --count
    }
  }
  return factoryObj
};

const newCounterFactory = counterFactory()
console.log(newCounterFactory.increment())
console.log(newCounterFactory.decrement())
