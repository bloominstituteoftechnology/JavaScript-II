// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const random = till => () => Math.floor(Math.random() * till + 1)

const randomTill10 = random(10)
const randomTill100 = random(100)
const randomTill1000 = random(1000)

console.log(randomTill10())
console.log(randomTill100())
console.log(randomTill1000())

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let num = 1;
  return () => num++
};

const newCounter = counter();

console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0

  return {
    increment: function() {
      return counter++
    }, 
    decrement: function () {
      return counter--
    }
  }
};

const counter1 = counterFactory()
const counter2 = counterFactory()

console.log("Counter 1:", counter1.increment())
console.log("Counter 1:", counter1.increment())

console.log("Counter 2:", counter2.increment())
console.log("Counter 2:", counter2.increment())

