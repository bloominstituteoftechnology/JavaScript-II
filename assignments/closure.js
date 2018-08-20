// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function swag () {
  let str = 'Do I want Lambda swag?';
  function getLength(){
    str +=  ' Yes!';
    return str;
  }
  return getLength;
}
let getSwag = swag();
getSwag();

// ==== Challenge 2: Create a counter function ====
// const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
let countUp = function() {
  let count = 0;
  let incrementer = function() {
    count++;
    return count;
  };
  return incrementer;
};

let counter = countUp();
counter();


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const counterFactory = function () {
    let count = 0;

    let counterObj = {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      }
    };
    return counterObj;
};

// now with arrow function version
const counterFactory_arrow  = () => {
  let count = 0;

  let counterObj = {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
  return counterObj;

};

letupDown = counterFactory_arrow();
 letupDown.increment();
// upDown.decrement();

// now using an IIFE   (design pattern called Self-Executing Anonymous Function
const counterFactory_IIFE = (function () {
  let count = 0;
  let counterObj = {
    increment: function() {
      return ++count;
    },
    decrement: function () {
      return --count;
    }
  };
  return counterObj;

})();

counterFactory_IIFE.increment();
// counterFactory_IIFE.decrement();

var counterFactory_IIFE_arrow = ( () => {
  let count = 0;

  let counterObj = {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
  return counterObj;

})();

// increment 10 times, counterFactory.increment() ran once already, so count will be at 11
function loopIIFE_up10 () {
  for(let i = 0; i < 10; i++) {
    counterFactory_IIFE_arrow.increment();
  }
}


//counterFactory_IIFE_arrow.increment();
// counterFactory_IIFE_arrow.decrement();

loopIIFE_up10();  // count at 11
counterFactory_IIFE_arrow.decrement(); // count at 10