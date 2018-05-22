// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function megabytesToBits (megs) {
  let megabytesToBytesRatio = 1000000;
  return megabytesToBytesThenBits(megs);
  
  function megabytesToBytesThenBits (mb) {
    let bytesToBitsRatio = 8;
    return bytesToBits(mb * megabytesToBytesRatio);

    function bytesToBits (bytes) {
      return bytes*bytesToBitsRatio;
    }
  }
}

console.log (megabytesToBits (1));


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    count++;
    return count;
  }
};
const newCounter = counter(); // Example usage
console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let count = 0;
  return {
    "increment": () => {
      count++;
      return count;
    },
    "decrement": () => {
      count--;
      return count;
    }
  };
};

const newAdvancedCount = counterFactory(); // Example usage
console.log(newAdvancedCount.increment()); // 1
console.log(newAdvancedCount.increment()); // 2
console.log(newAdvancedCount.decrement()); // 1


