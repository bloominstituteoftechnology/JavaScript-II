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
  return cb(arr.length);
}

getLength(items, (length) => console.log(length)); // Should be 4

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, (lastItem) => console.log(lastItem)); // Should be 'Gum'

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(1, 9, (z) => console.log(z)); // Should be 10

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(2, 5, (z) => console.log(z)); // Should be 10

function contains(item, list, cb) {
  return list.includes(item) ? cb(true) : cb(false);
}

contains('Gum', items, (z) => console.log(z ? 'Item is included!' : 'Item is not included')); // Should be 'Item is included!'

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  return cb([...new Set(array)]);
}

removeDuplicates([1, 1, 1, 1, 2, 3, 4, 4, 5, 6, 5, 1], (arr) => console.log(arr)); // Should be [1, 2, 3, 4, 5, 6]
