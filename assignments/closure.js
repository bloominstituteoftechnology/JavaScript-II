// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
  const square = (x) => {
    return x * x;
  }

// ==== Challenge 2: Create a counter function ====

  // Return a function that when invoked increments and returns a counter variable.

  const counter = (count) => {
    function counterIncrement (){
      return count++;
    }
    return counterIncrement;
  };
const newCounter = counter(1);
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

        

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log();
console.log();
console.log();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
          let param = 0;

          return {
            increment: function increment() {
                      return ++param;
            },
            decrement: function decrement () {
                      return --param;
            }
      }  
};   
const test = counterFactory();

    console.log(test.increment());
    console.log(test.increment());
    console.log(test.increment());
    console.log(test.increment());
    console.log();
    console.log(test.decrement());
    console.log(test.decrement());
    console.log(test.decrement());
