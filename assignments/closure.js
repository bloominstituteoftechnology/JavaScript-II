// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function helloWorldAlert() {
  let str = 'Hello, World!';

  function hWAlert() {
    alert(str);
  }
  hWAlert();
}
helloWorldAlert();


let counter = 0;
const newCounter = function () {
  console.log(counter += 1);
}
newCounter();
newCounter();
newCounter();
newCounter();



// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let counter1 = function () {
  let counter2 = 0;

  function changeBy(val) {
    counter2 += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return counter2;
    }
  };
}