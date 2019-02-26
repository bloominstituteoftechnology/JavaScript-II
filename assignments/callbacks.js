// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

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
  console.log(first);
});

function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  return cb(arr.slice(arr.length - 1));
}

last(items, function(last) {
  console.log(last);
});

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(2, 5, function(sum) {
  console.log(sum);
});

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(3, 15, function(total) {
  console.log(total);
});

function contains(item, list, cb) {
  let contains = false;
  for (let i = 0; i < list.length; i++) {
    if (item == list[i]) {
      contains = true;
    }
  }
  return cb(contains);
}

contains("Pencil", items, function(value) {
  console.log(value);
});

contains("Captain Falcon", items, function(value) {
  console.log(value);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
