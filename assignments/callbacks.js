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
  return cb(arr)
}
function lengthOfArr(arr) {
  return arr.length
}
console.log(getLength(items, lengthOfArr));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr)
}
function lastItem(arr) {
  return arr.pop();
}
console.log(last(items, lastItem))

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}
function newNumbers(x, y) {
  return x + y;
}
console.log(sumNums(14,22,newNumbers));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
function numVariables(x,y){
  return x * y;
}
console.log(multiplyNums(3,3,numVariables));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item,list);
}
function hasItem(item, list) {
  for (let i = 0; i < list.length; i++) {
      if (list.includes(item)) {
        return true;
      } else {
        return false;
      }
    }
  }

console.log(contains('Pencil' , items, hasItem));


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
