// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const selfServe = () => {
  let cone = " ice cream on a sugar cone."
  return {
    chocolate: () => { return "Chocolate" + cone },
    vanilla: () => { return "Vanilla" + cone }
  }
}

const newSelfServe = selfServe();

console.log(newSelfServe.chocolate());
console.log(newSelfServe.vanilla());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => (++count);
};

const newCounter = counter();

console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count)
  }
};

const newCounterFactory = counterFactory();

console.log(newCounterFactory.increment()); // 1
console.log(newCounterFactory.decrement()); // 0
