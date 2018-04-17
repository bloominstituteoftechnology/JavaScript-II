// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const ancestor = () => {
	let name = 'Charles ';
	const addDescendent = () => {
		name += 'I';
		return name;
	};
	return addDescendent;
}
let newAncestor = ancestor();
console.log(newAncestor());
console.log(newAncestor());
console.log(newAncestor());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const increment = () => {
  	count ++;
  	return count;
  };
  return increment;
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
let newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
  	'increment': function(){
  		count++;
  		return count;
  	},
  	'decrement': function(){
  		count--;
  		return count;
  	}
  }
}

let newFactory = counterFactory();
console.log(newFactory.increment());
console.log(newFactory.decrement());

