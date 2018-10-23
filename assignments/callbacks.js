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
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function first(items) {
  console.log(items[0]);
}

firstItem(items, first);


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function theLength(getlengths) {
  console.log(items.length);
}

getLength(items, theLength);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

function lastItem(items) {
  console.log(items.length-1)
}
last(items, lastItem);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function theSum(x, y) {
  console.log( x + y);
}

sumNums(6, 7, theSum);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function theMultiplication(x, y) {
  console.log( x * y);
}

multiplyNums(5, 6, theMultiplication);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

function itemInList(item, list) { // list = array(items)

  for (let i=0; i < list.length; i++) {
    if (item[i] ===list[i]) {
      return true;
    }

  }
    return false;
}

contains('Pencil', items, itemInList);
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
