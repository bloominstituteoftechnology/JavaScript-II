// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function allMight () {
	var bestHero = "All Might";
	console.log (`I am the BEST! I am ${bestHero}!!!`);
	debugger;

	function dekuIzuku () {
		var biggestFan = "Izuku";
		console.log (`I am allMight's BIGGEST FAN, ${biggestFan}!`);
		debugger;

		function bakugou () {
			console.log (`I really hate ${biggestFan}, he's such a loser.`);
			debugger;
		}
	}
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
