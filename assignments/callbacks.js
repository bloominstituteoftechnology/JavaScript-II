// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

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

//Solution
function getLength(arr, cb) {
  cb(arr.length); // getLength passes the length of the array into the callback.
}


//Function Invocation

getLength(items, function(length) {
  console.log(length);
});


//Solution
function last(arr, cb) {
  cb(arr[arr.length-1]); // last passes the last item of the array into the callback.
}
//Function Invocation
last(items, function(lastOne) {
  console.log(lastOne);
});

//Solution
function sumNums(x, y, cb) {
  cb(x+y);// sumNums adds two numbers (x, y) and passes the result to the callback.
}
//Function Invocation
sumNums(4,9, function(summer) {
  console.log(summer);
});

//Solution
function multiplyNums(x, y, cb) {
  cb(x*y); // multiplyNums multiplies two numbers and passes the result to the callback.
}
//Function Invocation
multiplyNums(4,9, function (multiplier) {
  console.log(multiplier);
});

// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  if(list.includes(item) === true){
    cb(true)
  } else {
    cb(false)
  }
}

contains ('Gum', items, function (finder) {
  console.log(finder);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
