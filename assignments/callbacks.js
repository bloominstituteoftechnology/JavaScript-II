const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
}

function firstItem(arr, cb) {
  return cb(arr[0]);
}
firstItem(items, function(first) {
  console.log(first)
});

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

function itemsLength(arr, cb) {
  return cb(arr.length);
}
itemsLength(items, function(length) {
  console.log(length)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

function lastItem(arr, cb) {
  return cb(arr.pop());
}
lastItem(items, function(last) {
  console.log(last)
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function sumNums(x, y, cb) {
  return cb(x,y);
}
function add(x,y) {
  console.log(x+y)
}
function multiply(x,y) {
  console.log(x*y)
};

sumNums(3,9, add);
sumNums(3,9, multiply)



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
