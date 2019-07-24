// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = [ 'Pencil', 'Notebook', 'yo-yo', 'Gum' ];
/* 
  //Given this problem: 
    function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
	// getLength passes the length of the array into the callback.
	cb(arr.length);
}
getLength(items, function(arrayItem) {
	console.log(arrayItem);
});

function last(arr, cb) {
	let lastItem = arr[arr.length - 1];
	cb(lastItem);
	// last passes the last item of the array into the callback.
}
last(items, (cb) => console.log(cb));

function sumNums(x, y, callback) {
	return callback(x + y);
	// last(items,(function(chris){console.log(chris)});

	function sumNums(x, y, cb) {
		// sumNums adds two numbers (x, y) and passes the result to the callback.
	}
	sumNums(2, 4, function(chris) {
		console.log(chris);
	});

	function multiplyNums(x, y, callback) {
		return callback(x * y);

		// multiplyNums multiplies two numbers and passes the result to the callback.
	}

	multiplyNums(3, 5, function(raspberry) {
		console.log(raspberry);
	});

	function contains(item, list, callback) {
		for (let i = 0; i < list.length; i++) {
			if (item === list[i]) {
				return callback(true);
			} else {
				return callback(false);
			}
		}
	}
	contains('lollipop', items, function(raspberry) {
		console.log(raspberry);
	});

	function contains(item, list, cb) {}
	// contains checks if an item is present inside of the given array/list.
	// Pass true to the callback if it is, otherwise pass false.
}

// /* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array}
