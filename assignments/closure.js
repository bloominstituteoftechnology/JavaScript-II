// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function styleFont(size, /*color*/){
  return function() {
    document.body.style.fontSize.style.color= size + 'px'//, color + 'color'//;
  }
}

const size12colorBlue= styleFont(12,'blue');
// ==== Challenge 2: Create a counter function ====
const counter = (x) => {
  return function (y) {
    return x + y;
  };
}
const add5 = counter(5);
const add10 = counter(10);

console.log(add5(2));
console.log(add10(2))
  // Return a function that when invoked increments and returns a counter variable.


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
