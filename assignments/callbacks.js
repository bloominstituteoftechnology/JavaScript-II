// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  /*
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
  return cb(arr)
}
const length = function(arr) {
  return arr.length;
}

console.log(getLength(items, length))

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr)
}

const lastitem = function(arr) {
  return arr[arr.length - 1];
}

console.log(last(items, lastitem))

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  z = x + y
  return cb(z)
}

const sums = function(result) {
  return result;
}

console.log(sumNums(2, 3, sums))

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y)
}

const multi = function(result) {
  return result;
}

console.log(multiplyNums(2, 3, multi))


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  var rt = false;
  for (i = 0; i < list.length; i++) {
    if (list[i] === item) {
      rt = true;
    }
  }
  return cb(rt);
}

const log = function(rt) {
  if (rt === false) {
    console.log('There ain\'t none!')
  } else {
    console.log("We got it!");
  }
}

contains('Pencil', items, log);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
