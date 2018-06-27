// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let hello = 'hello'

function default(){
	let n = 'world'
	return `Hello ${hello}`
}


// ==== Challenge 2: Create a counter function ====

function counter(){
  let n = 0
	return {increment:function(){
	n += 1;
	}
  }
}
const newCounter = counter();
newCounter.increment() //1



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
	let n = 0
	return {
	increment:function(){
		n += 1;
		},
	decrement:function(){
		n -= 1;
		},
  }
}

const yetAnotherCounterFactory = counterFactory();
yetAnotherCounterFactory.increment()
yetAnotherCounterFactory.decrement() 
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
