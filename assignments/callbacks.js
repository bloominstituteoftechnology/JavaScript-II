const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

function returnFirstItem(x) {
  console.log(x);
}

firstItem(items, returnFirstItem);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function gotLength(x) {
  console.log(x);
}

getLength(items, gotLength);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

function getLast(x) {
  console.log(x);
}

last(items, getLast);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

function getSum(x) {
  console.log(x);
}

sumNums(5,5, getSum);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

function getMulti(x) {
  console.log(x);
}

multiplyNums(9, 9, getMulti);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}

function doesItContainIt(x) {
  console.log(x);
}

contains('Pencil', items, doesItContainIt);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
