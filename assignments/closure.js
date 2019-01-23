// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const kingdom = (continentName) => {
  console.log(`Welcome to ${continentName}`);
  const region = () => {
    let continentRegion = 'The North';
    console.log(`${continentRegion} in ${continentName} will freeze you over`);
    function castle() {
      let continentCastle = 'Winterfell'
      console.log(`Winter is coming to ${continentCastle} in ${continentRegion} of ${continentName}`);
    }
    castle();
  }
  region();
}
kingdom('Westeros');


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count++;
    return count;
  }
};
let newCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(newCounter());
console.log(newCounter());



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let counterObj = {
    incrementor: function() {
      return count++;
    },
    decrementor: function() {
      return count--;
    }
  }
  counterObj.incrementor();
  counterObj.decrementor();  
  
};
// console.log(counterFactory());

