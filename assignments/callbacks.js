/* Create a callback function and invoke the function to test your work. 
You have been provided an example of a problem and a solution to see how 
this works with our items array.  Study both the problem and the solution 
to figure out the rest of the problems.

*/
const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

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

// Function Declartion Approach
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function first(items) {
  console.log(items[0]);
}

// firstItem(items, first); // Pencil

// Anonymous Function Approach
function firstItem(arr, cb) {
  return cb(arr);
}

firstItem(items, function(first) {
  console.log(first);
});

// firstItem(items, first); // Pencil

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

const arrLength = function(arr) {
  console.log(arr.length);
};
// getLength(items, arrLength); // 4

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

const lastItem = function(arr) {
  console.log(arr[arr.length - 1]);
};

// last(items, lastItem); // Gum

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

const add = function(num1, num2) {
  console.log(num1 + num2);
};

// sumNums(5, 10, add); // 15

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

const multiply = function(num1, num2) {
  console.log(num1 * num2);
};

// multiplyNums(8, 7, multiply); // 56

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

const containsItem = function(item, arr) {
  if (arr.indexOf(item) > -1) {
    console.log("TRUE");
    return true;
  } else {
    console.log("FALSE");
    return false;
  }
};

contains("Notebook", items, containsItem); // True
contains("Phone", items, containsItem); // False

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
