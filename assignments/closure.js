// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myNameIs = () =>{
  const name = "Andrew";
  return  () =>  { 
     return `My name is ${name}` ;
  };


}
const nameCheck = myNameIs();
console.log(nameCheck());
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let total =0;
  return () => { total +=1;
    return total;
  };
   
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
console.log(newCounter()); //3

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let total =0;

  return  { 
    increment: () => {
      total +=1;
      return total;},
    decrement: () => {
      total -=1;
      return total;}
  };
};

let newFactory = counterFactory();
newFactory.increment(); // 1
newFactory.increment(); // 2
console.log(newFactory.decrement()); //3