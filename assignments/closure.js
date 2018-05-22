// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function publicLib(){
  let booksPublic = '100 books';
  console.log(`Public Library has ${booksPublic}`);

    function personalLib(){
       let booksPersonal = '20 books';

       console.log(`Public library has ${booksPublic} and my personal library has ${booksPersonal}`);

    }

  return personalLib();

}//end of publicLib


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

   	var count = 0;
   	return function () {return count+=1;}
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

	return newObj;

	let newObj = {
  	increment: function(){
 		var count = 0;
  		return function () {return count+=1;}
	},

	decrement: function(){
		var countless = 100;
		return function () {return countless-=1;}
	}
	};         
};

