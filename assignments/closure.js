// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function widget(name) {
  const chachacha = name;
  console.log(`Hola, Popi, my name is ${chachacha}`);
}


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = function(){
  // Return a function that when invoked increments and returns a counter variable.
	
	++x;

	return x;
  
}
var x=0;

console.log(counter());
console.log(counter());
console.log(counter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
