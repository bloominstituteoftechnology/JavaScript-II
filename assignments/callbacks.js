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
  return cb(arr);
}
  // getLength passes the length of the array into the callback.
  const length = function(a){
   console.log(a.length)
  }
  getLength(items,length);


function last(arr, cb) {
  return cb(arr);
}
  // last passes the last item of the array into the callback.
  const lastValue = function(a){
    console.log(a.length - 1)
  }
  last(items,lastValue);

function sumNums(x, y, cb) {
  return cb(x,y);
}
  const sum = function(a,b){
    console.log (a + b)
  }

sumNums(items,sum);

// sumNums adds two numbers (x, y) and passes the result to the callback.

function multiplyNums(x, y, cb) {
  return cb(x,y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
const multi = function(a,b){
  console.log (a*b)
} 
multiplyNums(items,multi);

function contains(item, list, cb) {
  return cb(item,list);
}
const things = function (a,b){
  if (console.log(items.indexOf('pencil')));
    return true
}

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
