// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

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


function getLength(arr, cb){
  return cb(arr);// getLength passes the length of the array into the callback.
}
const lengthCheck = function(arr){
  console.log(arr.length);
}
getLength(items,lengthCheck);

function last(arr,cb){
  return cb(arr);// last passes the last item of the array into the callback.
}
const lastItem = function(arr){
  console.log(arr.pop);
}
last(items,lastItem);

function sumNums(x,y,cb){
  return cb(x,y);// sumNums adds two numbers (x, y) and passes the result to the callback.
}
const add = function(x,y){
  console.log(x + y)
}
sumNums (2,5,add);

function multiplyNums(x, y, cb) {
  return cb(x,y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
const multiply = function(x,y){
  console.log(x*y);
}
multiplyNums(5,8,multiply);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
