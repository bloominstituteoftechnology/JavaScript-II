// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function dayorNight(time) {
  let dayorNight = time;

  function dayOrNight() {
    if (dayorNight <= 18) {
   return 'Day';
    
    } else {
      return 'Night'
    }
    
  }
return dayorNight();
}
// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  let value = 0;
  return () => {
    return ++value;
};
}
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let value = 0;
  return {
    increment: () => {
      return ++value;
    },
     decrement: () => {
      return --value;
    }
  };
};
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.