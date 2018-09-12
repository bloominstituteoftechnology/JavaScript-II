// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const thisIsAFunction = () =>{
  debugger
  let backpackContents = 'variable';
  const funcOn = () =>{
    console.log(backpackContents)
    debugger
    let closureCarry = backpackContents;
    const stillFuncin = () =>{
      console.log(backpackContents,closureCarry);
      debugger
    }
    stillFuncin();
  }
  funcOn();
}
thisIsAFunction();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  
  count++
  return count ;
 // Return a function that when invoked increments and returns a counter variable.
};

const newCounter = () => {
  console.log(counter())
}
let count = 0;
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = {
  count: 0,
  increment: function() {return this.count++},
  decrement: function() {return this.count--}
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
console.log(counterFactory.count)
counterFactory.increment()
counterFactory.increment()
counterFactory.increment()
console.log(counterFactory.count)
counterFactory.decrement()
console.log(count)