// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function simpleClosure() {
  const amountOfChildren = ["Pedro", "Alan", "Samantha"]
  function childClosure() {
    let nameOfChild = "Pedro"
    function grandChild() {
      let nameOfGChild = "Mike"
      console.log(`This is simpleClosure. I have ${amountOfChildren.length} children. My oldest child's name is ${nameOfChild}, and his son's name is ${nameOfGChild}`)
    }
    grandChild();
  }
  childClosure();
};

// ==== Challenge 2: Create a counter function ====
function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 1;
  function counterrr() {
    return counter++;
  };

  return counterrr;
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 1;
  return objectThatCatIncrementAndDecrement = {
    increment: ()=>++counter,
    decrement: ()=>--counter
    // let me know if counter++/counter-- should have been the right logic. 
    // it just doesn't look pretty on a console log.
  }
};

let idk = counterFactory();

// initial value = 1
console.log(counterFactory().decrement()) // 0
console.log(idk.increment()) // 1
console.log(idk.increment()) // 2
console.log(idk.increment()) // 3
console.log(idk.decrement()) // 2

// i had to look around google to call this method. 