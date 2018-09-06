const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// firstItem passes the first item of the given array to the callback function.
function firstItem(arr, cb) {
  return cb(arr);
}

function first(items) {
  return items[0];
}

firstItem(items, first);

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr);
}

function length(items) {
  return items.length;
}

getLength(items, length);

// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(arr);
}

function lastItem(items) {
  return items[items.length - 1];
}

last(items, lastItem);

// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x, y);
}

function add(x, y) {
  return x + y;
}

sumNums(4, 6, add);

// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x, y);
}

function multiply(x, y) {
  return x * y;
}

multiplyNums(5, 5, multiply);


/* STRETCH PROBLEM */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
