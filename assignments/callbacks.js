// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution 
// to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

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


const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
  return cb(arr)
}

const length = function(arr){
  console.log(arr.length);
}

getLength(items, length);

// ___________________________________________________________________________


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

const theLast =  function(arr){
  console.log(arr.pop());
}

last(items, theLast);

// ___________________________________________________________________________

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}

const sum = function(x,y){
  console.log(x + y);
}

sumNums(3,2,sum);

// ___________________________________________________________________________

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x,y);
  }
  
  const multiply = function(x,y){
    console.log(x * y);
  }
  
  multiplyNums(3,2,multiply);

// ___________________________________________________________________________

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item,list);
}

const check = function(item,list){
  console.log(item.includes(item));
}

contains('yo-yo', items, check);

// ___________________________________________________________________________

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
