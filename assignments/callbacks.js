// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

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
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
});
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const add = x + y;
  return cb(add);
}

sumNums(1, 2, function(add) {
  console.log(add);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const multi = x * y;
  return cb(multi);
}

multiplyNums(2, 3, function(multi) {
  console.log(multi);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb(true);
  } else return cb(false);
}

contains('Pencil', items, function(contains) {
  console.log(contains);
});
contains('car', items, function(contains) {
  console.log(contains);
});

/* STRETCH PROBLEM */

const array = ['array', 'hello', 'hello', 'goodbye'];
function consoleThis(arr) {
  console.log(arr);
}
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let removedDups = [];
  array.forEach(item => {
    if (!removedDups.includes(item)) {
      removedDups.push(item);
    }
  });
  cb(removedDups);
}

removeDuplicates(array, consoleThis);
