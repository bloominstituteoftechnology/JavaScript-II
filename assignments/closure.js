// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function powerUp (x) {
  let num = 2;
  function elevate () {
    num = Math.round(Math.pow(num, x) * 100) / 100;
    return num;
  }
  return elevate;
}

let bacteriaPopulation = powerUp(1.5);
let humanPopulation = powerUp(1.1);
let mosquitoPopulation = powerUp (.9);

console.log(bacteriaPopulation());
console.log(bacteriaPopulation());
console.log(bacteriaPopulation());
console.log(bacteriaPopulation());
console.log(bacteriaPopulation());
console.log(bacteriaPopulation());
console.log(humanPopulation());
console.log(humanPopulation());
console.log(humanPopulation());
console.log(humanPopulation());
console.log(humanPopulation());
console.log(humanPopulation());
console.log(mosquitoPopulation());
console.log(mosquitoPopulation());
console.log(mosquitoPopulation());
console.log(mosquitoPopulation());
console.log(mosquitoPopulation());
console.log(mosquitoPopulation());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  function increment () {
    num++;
    return num;
  }
  return increment;
}

let numeroUno = counter();
let numeroDos = counter();
console.log (`Uno, ${numeroUno()}`);
console.log (`Dos, ${numeroDos()}`);
console.log (`Uno, ${numeroUno()}`);
console.log (`Uno, ${numeroUno()}`);
console.log (`Dos, ${numeroDos()}`);
console.log (`Dos, ${numeroDos()}`);
console.log (`Uno, ${numeroUno()}`);

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


