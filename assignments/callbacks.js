const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  return cb(arr);
  // firstItem passes the first item of the given array to the callback function.
}

function _first() {
  console.log(items[0]);
}
firstItem(items, _first);

function getLength(arr, cb) {
  return cb(arr)
  // getLength passes the length of the array into the callback.
}

function _length() {
  console.log(items.length);
}
getLength(items, _length);

function last(arr, cb) {
  return cb(arr);
  // last passes the last item of the array into the callback.
}

function _last() {
  console.log(items[items.length - 1]);
}
last(items, _last);

function sumNums(x, y, cb) {
  return cb(x, y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function _sum(x, y) {
  console.log(x + y);
}
sumNums(56, 56498, _sum);

function multiplyNums(x, y, cb) {
  return cb(x, y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function _multiply(x, y) {
  console.log(x * y);
}
multiplyNums(23, 856, _multiply);

function contains(item, list, cb) {
  return cb(item, list);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function _contains(item, list) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] != item) {
      console.log(false);
    } else {
      console.log(true);
    }
  }
}
contains("yo-yo", items, _contains);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}