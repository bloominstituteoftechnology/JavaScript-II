// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
//function myDog(dogName, dogBreed){
  //const name = dogName;
  //const breed = dogBreed;
  //console.log(`Your dog's name is : ${dogName}`);
  //function whatIsIt(){
    //console.log(`${name} is a ${breed}`)
  //}
  //whatIsIt();
//}
 const myDog = (dogName, dogBreed) => {
   const name = dogName;
   const breed = dogBreed;
   console.log(`Your dog's name is: ${dogName}`);
   const whatIsIt = () => (console.log(`${name} is a ${breed}`));
   whatIsIt();
 }

myDog("Shep", "Border Collie"); 


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  const newCounter = 
  function(){
    
  }
};
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
