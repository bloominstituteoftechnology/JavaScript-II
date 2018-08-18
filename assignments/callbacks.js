
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const lazyMe = function(squrrel) {
  console.log(squrrel);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}
firstItem(items, lazyMe);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, lazyMe);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}
last(items, lazyMe);
function makeAddition(cats) {
  console.log(cats);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(1, 2, makeAddition);

function makeMultiply(tacos) {
  console.log(tacos);
} 

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}
multiplyNums(2, 3, makeMultiply);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const boolean = list.includes(item);
  cb(boolean);
}
contains("Gum", items, lazyMe);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
