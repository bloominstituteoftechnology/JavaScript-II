// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.



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
  return cb(arr);
}

function lengthOfArray(arr){
  console.log(arr.length);
}

getLength(items, lengthOfArray);

  // getLength passes the length of the array into the callback.

  function last(arr, cb) {
    return cb(arr);
  }
  
  function lastOfArray(arr){
    console.log(arr.slice(-1)[0]);
  }
  
  last(items, lastOfArray);

  // last passes the last item of the array into the callback.


function sumNums(x, y, cb) {
  return cb(x, y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function add(x, y){
  console.log(x + y);
}

sumNums(2,2,add);

function multiplyNums(x, y, cb) {
  return cb(x, y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function multiply(x, y){
  console.log(x * y);
}

multiplyNums(3, 4, multiply);


function contains(item, list, cb) {
  return cb(item, list);
  
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function match(item, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === item) {
      console.log("true");
    }
    else{
      console.log("false");
    }
  }
}

contains("not", items, match);
contains("Gum", items, match);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
