// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function nameBuilder(firstName,lastName){
	let message = "My full name is.. ";
	function Combine(){
		return message + firstName + " " + lastName;
	}
	return Combine();
}
console.log(nameBuilder("Angelo","Deleon"));




// ==== Challenge 2: Create a counter function ====
var count = 0;
const counter = () => {
  return function(){
    count++;
    console.log(count); //?
  }();
};
counter();
counter();
counter();
counter();
counter();

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
