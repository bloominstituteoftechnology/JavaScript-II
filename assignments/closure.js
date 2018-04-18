// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function closuresAreFun () {
  var cats = "Our furry overlords";
  function whatAreCats () {
    return `${cats} are in a closure.`
  }
  return whatAreCats
}
let closurePractice = closuresAreFun()
console.log(closurePractice());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter = 0;
  return () => {
    counter+=10
    return counter;
  }
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;
  let counterObject = {
      "increment": () => {
        return () => {
          counter++;
          return counter;
        }
      },
    "decrement": () => {
      return () => {
        counter--;
        return counter;
      }
    }
  }
  return counterObject;
}
  
console.log(counterFactory()) //invoking the function counterFactory
newFactory = counterFactory() // assigning the value of the invocation of counterFactory to newFactory
console.log(newFactory) // testing to see if newFactory returns the same thing as counterFactory()
newIncrement = newFactory.increment(); // assigning the value of the invocation of the increment method to a variable
console.log(newIncrement()) // invoking the new variable for incrementing
console.log(newIncrement()) // invoking the new variable again to test increment
newDecrement = newFactory.decrement(); // assigning the value of the invocation of the decrement method to a variable
console.log(newDecrement()) // invoking the new variable for decrementing
console.log(newDecrement()) // invoking the new variable again to test that it's working
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.