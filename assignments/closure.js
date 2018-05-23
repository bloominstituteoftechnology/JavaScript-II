// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function bigDaddyFunction(){
  let x = 0;

  // This doesnt
  // function mediumFunction () {
  //   x++;
  //   return x;
  // }

  /* This works*/
  return () => {
    x++;
    return x;
  }
  // mediumFunction();
  // console.log(x);


}



const funk = bigDaddyFunction();
console.log(funk()); //
console.log(funk());
console.log(funk());

/*************************************************/


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let x = 0;
    function lilCounter()
    {
      x++;
      return x;
    }
  return lilCounter;
  // Return a function that when invoked increments and returns a counter variable.
};

console.log(counter());
console.log(counter());
counter();
const newCounter = counter();
console.log(newCounter()); //
console.log(newCounter()); //


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
/*********************************************************************/
const counterFactory = () => {
  // Our variable to be incremented
  let x = 0;


// Here's our object
  let counterObj = {
      increment : function(){
                    x++;
                    return x;
                  },
      decrement : function () {
                    x--;
                    return x;
                  }
    }

  return counterObj;
};
/*********************************************************************/

console.log(counterFactory());

let incrementDecrement = counterFactory();
console.log(incrementDecrement.increment())
console.log(incrementDecrement.increment())
console.log(incrementDecrement.increment())
console.log(incrementDecrement.decrement())
