// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function top() {
	let topVariable = "I am in top()";
	//console.log(`Not able to access bottom() variable  : ${bottomVariable}`);   // will get an error bottomVariable is not defined.
	function middle() {
		let middleVariable = "I am in middle()";
		function bottom() {
		let bottomVariable = "I am in bottom()";		

		console.log(`bottom()   :--  able to access top() and middle() variable because of closure \n ${topVariable} \n ${middleVariable}`);
		}
		bottom();
	}
	middle();
}
top();


// ==== Challenge 2: Create a counter function ====
const counter = (num = 1) => { 
	let count = (num) =>  {return num += 1; } count();  
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: 
const newCounter = counter();
console.log(counter()); // should return 2.


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
