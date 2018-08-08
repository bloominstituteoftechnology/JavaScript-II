// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function catTitude() {
  let cat = "Mr.Fluffy Bottom";

  function goMeow() {
    let hungry = "Meow mew Mow Meowy";
    console.log(cat + " says " + hungry + " which translates to... I'm hungry, I demand Food! The Good stuff, not that cheap kibble either. Chop-Chop Missy... ");

    function displeasure() {
      let theClaw = " Ouchie! "
      console.log(cat + " thinks you are taking to long...You get the Claw!..." + theClaw);
    }
    displeasure();
  }
  goMeow();
}
catTitude();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

let n = 1;
function increment() {
  let goUpOne = n++;
  console.log(n);
}
increment();
increment();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
