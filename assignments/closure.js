// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const globalVariable = -1;

const grandParent = () => {
 console.log('Inside grandParent');
 const grandParentVariable = 0;
 console.log('globalVariable from inside of grandParent: '+globalVariable);
//  functionParent();
  functionParent = () => {
    console.log("Inside parent");
    const parentVariable = 1;
    console.log('grandParentVariable from inside parent '+grandParentVariable);
    //  functionChild();
    functionChild = () => {
      console.log("Inside child");
      const childVariable = 2;
      console.log('childVariable: '+childVariable);
      console.log('parentVariable: '+parentVariable);
      console.log('grandParentVariable: '+grandParentVariable);
      console.log('globalVariable: '+globalVariable);
    }
  }
  
};
grandParent();
functionParent();
functionChild();



// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0 
  return () => {
    count++
    console.log(count)
  }
};

newCounter = counter();
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (counterVariable) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  console.log('inside counterFactory');
  console.log('counterVariable '+counterVariable);
  
  const counterFactoryObject = {
    increment: function(){
      return console.log('counterVariable increment '+ ++counterVariable);
    },
    decrement: function(){
      return console.log('counterVariable decrement '+ --counterVariable);
    }
  }
  
  return  (counterFactoryObject.increment(), counterFactoryObject.decrement()); 
};

counterFactory(9);

