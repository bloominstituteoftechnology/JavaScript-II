// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Pencil', 'Notebook', 'yo-yo', 'Gum',];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {console.log(first)}  );

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr)
}

const length = function(arr){
  return arr.length
}

console.log(getLength(items, length));



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr)
}

const lastItem = function(arr){
  return arr.slice(-1)[0]
  }

console.log(last(items, lastItem));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y)
}

const sum = function(x,y){
  return x+y
}

console.log(sumNums(2, 3, sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
return cb(x,y)
}

const multi = function(x,y){
  return x * y;
}

console.log(multiplyNums(3,7,multi))

function contains(arr, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(arr, list)
}

const check = function(arr, list){
  return arr.includes(list)
}

console.log(contains(items, 'cat', check))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

const dup = function(array){
  for(let i = 0; i < array.length; i++){
    // let index = indexOf(array[i])
    // let newArray = array.map(array.)
  }
}

console.log(removeDuplicates(items, dup))