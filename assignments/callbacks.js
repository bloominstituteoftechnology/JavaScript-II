const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
     return cb(arr);
  }

  function first(arr) {
    console.log(arr[0]);
  }

firstItem(items, first);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
function length(arr) {
  console.log(arr.length);
}

getLength(items, length);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
function lastOne(arr) {
  console.log(arr[arr.length-1]);
}
last(items, lastOne);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
function add(x, y) {
  console.log(x + y);
}

sumNums(3, 6, add);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
function logResult(res) {
  console.log("This is the result: " + res);
}

multiplyNums(3, 6, logResult);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}
contains("Gum", items, logResult);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
