// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let woman = "Woman";
let man = "Man";

function superheroName() {
  const wonderGal = "Wonder";
  console.log(`I am ${wonderGal} ${woman}`);

  function superMan() {
    const superGuy = "Super";
    console.log(`I am ${superGuy} ${man}`);

    function mixUp() {
      console.log(`I am ${superGuy} ${woman} ${wonderGal} ${man}`);

    }

    mixUp();
  }

  superMan();

}

superheroName();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return function() {
    count++;
    return count;
  }

};

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  return function() {

    let object = {
      increment: function() {
       count++; 
       return count;
      },
       decrement: function() {
        count--; 
        return count;
      }
    }//object

    

  }
}

const counterIncr = counterFactory();


/*
{
  increment: function() {
    count++; 
    return count;
  },
  decrement: function() {
    count --; 
    return count;
  }
}
*/