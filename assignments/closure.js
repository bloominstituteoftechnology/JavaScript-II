// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function teacher(){
  let myName = "Christina";
  console.log ("Teacher: "+ myName);
    function student(){
      console.log ("Student: " +myName);
      function studentStudent(){
        console.log ("studentStudent: "+myName);
      }
      return studentStudent();
    } 
    return student();
}
teacher();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count =0;
  return ()=>{
    count++;
    return count; 
  }

};
const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====


const counterFactory = () => {
  let count = 0;
  return {
      'increment': () => {
          count++;
          return count;
      },
      'decrement': () => {
          count--;
          return count;
      }
  }
};

let newFactory = counterFactory();
console.log(newFactory.increment());
console.log(newFactory.decrement());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.decrement());

  
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
