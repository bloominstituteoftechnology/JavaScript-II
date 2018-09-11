// Create a callback function and invoke the function to test your work. You have
// been provided an example of a problem and a solution to see how this works with
// our items array.  Study both the problem and the solution to figure out the rest
// of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  let arg = arr.length;
  return cb(arg);
}

getLength(items, function(arg) {
  console.log(arg);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let arg = arr[arr.length - 1];
  return cb(arg);
}

last(items, function(arg) {
  console.log(arg);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let arg = x + y;
  return cb(arg);
}

sumNums(1, 2, function(arg) {
  console.log(arg);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let arg = x * y;
  return cb(arg);
}

multiplyNums(1, 2, function(arg) {
  console.log(arg);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  let arg = list.includes(item);
  return cb(arg);
}

contains('Gum', items, function(arg) {
  console.log(arg);
});


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
