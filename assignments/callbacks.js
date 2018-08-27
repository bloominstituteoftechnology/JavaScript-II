const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
//==============================

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}
function first(items) {
  console.log(items[0]);
}
firstItem(items, first);

//==============================

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
function length(items) {
  console.log(items.length);
}
getLength(items, length);

//==============================

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
function lastItem(items) {
  console.log(items.slice(-1)[0]);
}
last(items, lastItem);

//==============================

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
function sum(x, y) {
  console.log(x + y);
}
sumNums(3, 4, sum);

//==============================

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
function multiply(x, y) {
  console.log(x * y);
}
multiplyNums(3, 4, multiply);

//==============================

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (i = 0; i < list.length; i++) {
    if (item === list[i]) {
      return cb(true);
    }
  } return cb(false);
}
function print(output) {
  console.log(output);
}

console.log(contains("apple", ["orange", "banana", "apple", "grapes", "kiwi"], print));

//==============================

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
