// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const simple = () => {
	console.log('Hello world');
}

// ==== Challenge 2: Create a counter function ====
	
const counter = (function() {
	var n=0;
		return function(){
      console.log(n+=1);
		};
})();
var counter1=counter;
counter1();
counter1();
counter1();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = function(){
	var n=0;
		return {
    increment: function() {
      console.log(n+=1)
    },
    decrement: function() {
      console.log(n-=1)
    }
  }
}();

let count=counterFactory;
count.increment();
count.increment();
count.decrement();
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

