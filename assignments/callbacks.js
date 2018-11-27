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
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, (item) => {
  console.log(item)
})


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr.length - 1);
}
last(items, function (length) {
  console.log(length)
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(2, 3, (cb) => (console.log(cb)));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}
multiplyNums(2, 3, (cb) => (console.log(cb)));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item))
}
contains('Pencil', items, (cb) => (console.log(cb)));

// solution two 
const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

function contains(item, list, cb) {
  // checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    }
  }
  return cb(false);
}

contains('dfjkl', items, function (cb) {
  console.log(cb);
})



// false


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // x  removeDuplicates removes all duplicate values from the given array.
  // x  Pass the duplicate free array to the callback function.
  // x  Do not mutate the original array.
  cb(array.filter((acc, curr) => {
    return array.indexOf(acc) === curr;
  }))
}
removeDuplicates(items, (cb) => (console.log(cb)));
