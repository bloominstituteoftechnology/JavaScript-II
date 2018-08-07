// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function simple(item, param){
  function closure() {
    typeof ans === "string" ? console.log(ans) : console.log(ans%7)
  }

  let ans = item + param;
  return closure()
}

simple(8, 'amigo')
simple(7, 5)


// ==== Challenge 2: Create a counter function ====
const counter = (ans) => {
  // Return a function that when invoked increments and returns a counter variable.
  const increment =  function() {
    return ans += 1
  }
  return increment
};
let test = 0
// Example usage: const
let newCounter = counter(test);
console.log(newCounter()); // 1
console.log(newCounter())
console.log(newCounter())

// /* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
