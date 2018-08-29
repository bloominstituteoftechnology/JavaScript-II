const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

  // firstItem passes the first item of the given array to the callback function.
function firstItem(arr, cb) {
  return cb(arr);
}

function indexZero(items) {
  console.log(items[0]);
}

firstItem(items, indexZero);

// getLength passes the length of the array into the callback.

function getLength(arr, cb) {
  return cb(arr);
}

function howLongAmI(items) {
  console.log(items.length);
}
getLength(items, howLongAmI);

// last passes the last item of the array into the callback.

function last(arr, cb) {
  return cb(arr);
}

function indexLast(items) {
  console.log(items[items.length - 1]);
}

last(items, indexLast);

// sumNums adds two numbers (x, y) and passes the result to the callback.

function sumNums(x, y, cb) {
  return cb(x,y);
}

function addition(x, y) {
  console.log(x + y);
}

sumNums(7, 5, addition);
// multiplyNums multiplies two numbers and passes the result to the callback.

function multiplyNums(x, y, cb) {
  return cb(x,y);
}

function multiply(x, y) {
  console.log(x * y);
}

multiplyNums(7, 5, multiply);

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  if(list.includes(item)) {
    return cb(true);
  }
  return cb(false);
}

function doIContain(item, list) {
  console.log(item);
}

contains('Notebook', items, doIContain);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDuplicates = [];
  for (let i = 0; i < items.length; i++) {
    
  }
}
