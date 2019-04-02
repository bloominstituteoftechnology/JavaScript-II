// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

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
  return cb(arr.length);
}

getLength(items, function(caller) {
  console.log(caller);
});

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, function(caller) {
  console.log(caller);
});

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(3, 4, function(add) {
  console.log(add);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.

function contains(item, list, cb) {
  for (let i = 0; i < list.length; i++) {
    if (item === list[i]) {
      return cb(true);
    }
  }
  return cb(false);
}

console.log(
  contains("Pencil", items, function(a) {
    return a;
  })
);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
