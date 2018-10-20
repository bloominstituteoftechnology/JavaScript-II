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

//
// GET LENGTH
//
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function (size) {
  console.log(size);
});

//
// RETURN LAST
//
function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, function (last) {
  console.log(last);
});

//
// SUM OF NUMS
//
function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(5, 3, function (sum) {
  console.log(sum);
});

//
// MULTIPLY NUMS
//
function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(3, 3, function (multiply) {
  console.log(multiply);
});

//
// CONTAINS
//
function contains(item, list, cb) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

contains('Gum', items, function (check) {
  console.log(check);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
