// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parent() {
  let parentage = 50
  return "I am a parent."
    function child() {
      let childage = 30
      return "I am a child."
        function grandchild() {
          let grandChildAge = 10
          return "I am a grandchild."
        }
    }
}

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    var count = 0;
    return function () {return count += 1;}
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counterObject = {
  "increment": function() {
    var newCount = 0;
    return function () {return newCount += 1;}
  },
  "decrement": function() {
    var newCount = 0;
    return function () {return newCount += -1;}
  },
}
return counterObject
};