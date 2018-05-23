// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closure = () => {
    let myName = 'Erin';
    console.log(`My name is ${myName}.`);
    const favoriteBand = () => {
        let band = 'Queen';
        console.log(`My name is ${myName}, and my favorite band is ${band}.`);
    };
    return favoriteBand();
};
closure();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  var counterVar = 0;
  function incrementCounter() {
    return function() {
      counterVar++;
    return counterVar;
    };
}
return incrementCounter();
};
const newCounter = counter(0);
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    let counterVar = 0;
    const increment = () => {
        counterVar += 1;
        increment();
        return counterVar;
    };
    const decrement
    return increment();
    
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
