// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let lambda = 'school';
function getLambda(){
  return lambda;
}
console.log(getLambda());


// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.
  const counter = () => {
    let total = 0;
    return () => (++total);
  };

const newCounter = counter();
  newCounter(); // 1
  newCounter(); // 2



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};



//Another solution to Challenge 3:
const counterFactory = (function() {
  let insideCounter = 0;
  function changeBy(val) {
    insideCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return insideCounter;
    }
  };
})();

//console.log(counter.value()); // logs 0
// counter.increment();
// counter.increment();
// console.log(counter.value()); // logs 2
// counter.decrement();
// console.log(counter.value()); // logs 1
