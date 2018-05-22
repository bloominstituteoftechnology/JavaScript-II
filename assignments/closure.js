// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const trafficLight = () => {
	let light = {};
	light.status = 'red light'
	console.log(light.status);
	light.green = function() {
		light.status = 'green light';
		return light.status;
	};
	light.yellow = function() {
		light.status = 'yellow light';
		return light.status;
	};
	light.red = function() {
		light.status = 'red light';
		return light.status;
	};

	return light;
};


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counterVar = 0;
  return function() {
  	counterVar++;
  	return counterVar;
  };
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let cFact = {};
  cFact.counter = 0;
  cFact.increment = function() {
  	cFact.counter++;
  	return cFact.counter;
  };
  cFact.decrement = function() {
  	cFact.counter -= 1;
  	return cFact.counter;
  };
  return cFact;
};
