// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function showName (firstName, lastName) {
  var nameIntro = "Your name is";
      
  function makeFullName () {       
  return (`${nameIntro} ${firstName} ${lastName}`);   
  };
  
  return makeFullName ();
};
  
  console.log(showName ("Brandon", "Allison"));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () =>{
  let count = 0;
  return function (){
    count = ++count;
    return count;
  }

  
};
const newCounter = (counter());
 


// Example usage: const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;

  

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};


