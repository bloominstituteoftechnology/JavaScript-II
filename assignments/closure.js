// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function bossFunc(){
	let topValue = 'Hail Galaxar!';
	function employeeFunc(){
		console.log('Get ready. Here he comes. ' + topValue);
	}
	return employeeFunc();
}

let hrFunc = bossFunc();
hrFunc();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let timer = 0;
  return () => {
  	timer++;
  	return timer;
  };

};

const newCounter = counter();
newCounter();
newCounter();
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let timer = 0;
  return {
  	increment: () => (++timer),
  	decrement: () => (--timer),
  };
};

const bigCounterFactory = counterFactory();
bigCounterFactory.increment();
bigCounterFactory.increment();
bigCounterFactory.increment();
bigCounterFactory.decrement();
bigCounterFactory.decrement();