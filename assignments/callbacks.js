const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr);
}

function first(items) {
  console.log(items[0]);
}
firstItem(items, first);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

  cb(arr);
}

function length(items) {
  console.log(items.length);
}
getLength(items,length);

function last(arr, cb) {
  // last passes the last item of the array into the callback.

  cb(arr);
}

function lastitem(items,last) {
  console.log(items[3]);
}
last(items, lastitem);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

cb(x, y);
}

function addNum(x, y) {
  console.log(x+y);
}
sumNums(10, 20, addNum);
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

cb(x, y);
}

function multiplyNumbers(x, y) {
  console.log(x*y);
}
multiplyNums(22, 4, multiplyNumbers);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  console.log(list.includes(item));
}

let checkItem = function(item, list) {
  if (list.includes(item) === true) {
    return true;
  } else {
    return false;
  }
}

contains('Pencil', items, checkItem); // returns true because Pencil exists in array
contains('tshirt',items, checkItem); // returns false because tshirt doesn't exist inside of the array

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
