// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let foot ="Throwing the Football with my Friends";
function whatIsFoot());
return foot;
}
console.log(whatIsFoot());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let val= closure;
  return function counter(){
    val += 1;
    console.log(val);
    return val;
  }
};
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let counter = 0;
  console.log(counter);
  let increment =() => counter += 1;
  let decrement = => counter -= 1;
  let res0bj ={increment , decrement};
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let foo = counterFactory();

  console.log(foo.decrement());
  console.log(foo.increment());
  return res0bj;
};