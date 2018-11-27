// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function Healthpoints(hp) {
  const hpValue = hp;
  console.log(`You have ${hp} hp.`);
  //debugger;
  
  function takeDamage() {
    const tookdmg = hp-1;
    console.log(`${tookdmg} you know have ${hp} left`);
    //debugger;
    
    function faint() {
      const fainted = "You have fainted"
      console.log(`${fainted} because your hp was ${hp} but is now ${tookdmg}`);
      //debugger;
    }
    
    faint();
  }// faint
  
  takeDamage();
}// takeDamage
Healthpoints(1);

// ==== Challenge 2: Create a counter function ====
let num = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  num++
  return num;
};

console.log(counter());
console.log(counter());
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
