// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const sampleString = "Hi";

function sampleFunction(stringParameter){
	const word = stringParameter;
	const number = 1;
	function sampleNestedFunction(){
		return word + number;
	}
	return sampleNestedFunction();
}

console.log( sampleFunction(sampleString) );

// ==== Challenge 2: Create a counter function ====

//function counter(){
const counter = () => {
	var c = 1;
	function increment(){
		return c++;
	}
	return increment;
}

// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
