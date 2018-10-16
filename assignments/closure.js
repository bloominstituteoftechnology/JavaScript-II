// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function wisdom() {
  let bananas = "banana stand";
  function money() {
    console.log(`I told you, there's always money in the ${bananas}!`);
  }
  money();
}

wisdom();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => ++count;
};

newCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let obj = {"count": 0};
  obj["increment"] = function(){
    return ++this.count;
  }
  obj["decrement"] = function(){
    return --this.count;
  }
  return obj;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

incrementor = counterFactory();
incrementor.increment();

decrementor = counterFactory();
decrementor.decrement();