// Create a callback function and invoke the function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

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
  cb(arr.length);
}

function last(arr, cb) {
  cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  cb(x + y);
}

function multiplyNums(x, y, cb) {
  cb(x * y);
}

function contains(item, list, cb) {
  cb(list.includes(item));
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  let unique = (...new Set(array));
  cb(unique);
}
