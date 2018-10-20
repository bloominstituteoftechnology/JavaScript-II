// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myClosure() {
    const name = 'lad';
    helloClosureMyOldFriend();

    function helloClosureMyOldFriend() {
        console.log(`Aye, ${name},  it is operational`);
    }
}
myClosure();


// ==== Challenge 2: Create a counter function ====


  var number = 1; // name is a local variable created by init

function counter(number) {
  // newCounter();    
  function newCounter(number) { // displayName() is the inner function, a closure
    return number = number + 1; // use variable declared in the parent function    
  }
  newCounter();
}

console.log(counter(number));




// console.log(counter(1));
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
