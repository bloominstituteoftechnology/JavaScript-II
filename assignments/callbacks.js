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

  // getLength passes the length of the array into the callback.
// function getLength(arr, cb) {
//   return cb(arr.length);
// }

// const callBack = function(len) {
//   console.log(len)
// }

// getLength(items, callBack);


  // last passes the last item of the array into the callback.
// function last(arr, cb) {
//   return cb(arr[arr.length-1])
// }

// const callBack = function(last) {
//   console.log(last)
// }

// last(items, callBack);


  // sumNums adds two numbers (x, y) and passes the result to the callback.
// function sumNums(x, y, cb) {
//   return cb(x+y);
// }

// const callBack = function(sum) {
//   console.log(sum);
// }

// sumNums(2,4,callBack);


  // multiplyNums multiplies two numbers and passes the result to the callback.
// function multiplyNums(x, y, cb) {
//   return cb(x*y);
// }

// const callBack = function(mult) {
//   console.log(mult);
// }

// multiplyNums(2,3,callBack);


  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
// function contains(item, list, cb) {
//   cb(list.includes(item))
// }
// const callBack = function(bool) {
//   console.log(bool);
// }

// contains("Paper", items, callBack);

/* STRETCH PROBLEM */

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

const newItems = ['Pencil', 'Notebook', 'yo-yo', 'Gum', "Notebook"];

function removeDuplicates(array, cb) {
  newList = []
  for (let i=0; i < array.length; i++) {
    if (newList.includes(array[i]) === false) {
      newList.push(array[i]);
    }
  }
  return cb(newList);
}

const callBack = function(lst) {
  console.log(lst)
}

removeDuplicates(newItems, callBack);