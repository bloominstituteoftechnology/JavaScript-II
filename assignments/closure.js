// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let character = 'Ironman'
function characterSpeak() {
  return 'I am ' + character + '!';
}

console.log(characterSpeak());



function anotherCharacterSpeak(characterName) {
  return 'I am ' + characterName + '!';
}

console.log(anotherCharacterSpeak('the Hulk'));


// ==== Challenge 2: Create a counter function ====
let firstNumber = 0;

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return firstNumber += 1;
};

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let secondNumber = 0;

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  
};
