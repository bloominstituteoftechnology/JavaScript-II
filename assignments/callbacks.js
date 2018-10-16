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

const a = [1, 5, 2, 3, 2, 4];

const getLength = (arr, cb) => cb(arr.length);
getLength(a, console.log); // 6

const last = (arr, cb) => cb(arr[arr.length - 1]);
last(a, console.log); // 4

const sumNums = (x, y, cb) => cb(x + y);
sumNums(2, 4, console.log); // 6

const multiplyNums = (x, y, cb) => cb(x * y);
multiplyNums(2, 4, console.log); // 8

const contains = (item, list, cb) => cb(list.includes(item));
contains(0, a, console.log); // false

/* STRETCH PROBLEM */

const removeDuplicates = (arr, cb) => cb(new Set(arr));
removeDuplicates(a, console.log); // { 1, 5, 2, 3, 4 }
