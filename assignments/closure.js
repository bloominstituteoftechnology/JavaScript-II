// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parent(){
  const parent = 'parent';
  console.log(`I am the ${parent} and my closure is. I can't say who my child or grandchild is. I do not have a closure in chrome dev tools, but I am restricted the global window object on the DOM.`);
  child();
  function child(){
    let child = 'child';
    console.log(`I am the ${child}. My parent is ${parent}. I can't say who my child is. Since I am accessing the parent variable, my closure is the parent function`);
    grandChild();
    function grandChild(){
      const grandchild = 'grandchild';
      console.log(`I am the ${grandchild}. My parent is ${child}, and my grandparent is ${parent}. I have no children. I have two closures. My first closure is child since I use the child variable and because it's located inside the child function. My second closure is parent since I access the parent variable inside of the parent function.`);
    }
  }
}
parent();

// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   let countVal = 0;
//   // Return a function that when invoked increments and returns a counter variable.
// };

const newCounter = function counter(){
  let count = 0;
  function countUp(){
    return count++;
  }
  countUp();
  countUp();
  countUp();
  console.log(count);
}

newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const counterObj = {
    count: 0,
    increment: function countUp(){
      return counterObj.count++;
    },
    decrement: function countDown(){
      return counterObj.count--;
    }
  }
  console.log(counterObj);
  console.log(counterObj.increment());
  console.log(counterObj.increment());
  console.log(counterObj.increment());
  console.log(counterObj.decrement());
  console.log(counterObj);
};

counterFactory();
