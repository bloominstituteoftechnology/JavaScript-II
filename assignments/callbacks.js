const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  const first = arr[0];
  return cb();
}
firstItem(items, cb = function() {return first});

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  const length = arr.length;
  return cb();
}

getLength(items, cb = function() {return length});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const lastItem = arr[arr.length - 1];
  return cb();
}

last(items, cb = function() {return lastItem});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  return cb();
}

sumNums(4, 6, cb = function() {return sum});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const result = x * y;
  return cb();
}

multiplyNums(4, 6, cb = function() {return result});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const contain = list.includes(item);
  return cb();
}

contains("yo-yo", items, cb = function() {return contain});

/* STRETCH PROBLEM */
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const names = ["George", "Sira", "Rebecca", "Ronald", "Rebecca", "Tammy", "Ronald"];

const uniqueArray = (arr) => arr.filter(function(elem, p, arr) {
  return arr.indexOf(elem) == p;
});

uniqueArray(names);