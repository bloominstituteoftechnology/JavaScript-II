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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

// CB TEST - 4
// getLength(items, function(lens){
//   console.log(lens);
// });


function last(arr, cb) {
  // last passes the last item of the array into the callback.\
  return cb(arr[arr.length-1])
}

// CB TEST - Gum
// last(items, function(last){
//   console.log(last);
// });


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y)
}
// CB TEST - NotebookPencil
// sumNums(items[1],items[0], function(num){
//   console.log(num);
// });

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y)
}
// CB TEST - 6
// multiplyNums(2, 3,  function(mult){
//   console.log(mult);
// });

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item))
}
// CB TEST - true
// contains('yo-yo', items, function(result){
//   console.log(result);
// });


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  undupedArray = [];
  undupedArray = array.filter(function(item, index, array){
    if (index == array.lastIndexOf(item)) {
      return item
    }
  });
  return cb(undupedArray);
}

// CB TEST - returns [2,3,1]
// let items2 = [1,1,1,1,2,2,3,1];
// removeDuplicates(items2, function(result){
//   console.log(result);
// })
