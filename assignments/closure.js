// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function iLovePie(){
  const pie = 'Pie is the best';
  function iLoveCake () {
    const heaven = `${pie}, but cake is good too!`;
    return heaven;
  }
  return iLoveCake();
}

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  const increment = () => {
    return count + 1;
  }
  return increment();
};


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = {};
  let i = 0;
  count.increment = () => {
    return i + 1;
  }
  count.decrement = () => {
    return i - 1;
  }  
  return count;
};

let x = counterFactory();
console.log(x.decrement());