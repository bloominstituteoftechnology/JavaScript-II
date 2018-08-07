const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// Made PR

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function firstIndex(items) {
  return (items[0]);
}

firstItem(items, firstIndex);

//

function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
  cb(arr);
}

function arrLength(items) {
  return items.length;
}

getLength(items, arrLength);

//

function last(arr, cb) {
    // last passes the last item of the array into the callback.
  cb(lastIndex);
}

function lastIndex(items) {
  return items[items.length - 1];
}

last(items, lastIndex);

//

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x, y);
}

function sum (a, b) {
  return a + b;
}

sumNums(2, 4, sum);

//

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x, y);
}

function multiply(a, b) {
  return a * b;
}

multiplyNums(5, 5, multiply);

//

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    cb(item, list);
}

function listChecker(item, list) {
  for(let i = 0; i < list.length; i++) {
    if(item === list[i]) {
      return true;
    }
  }
}

contains('Pencil', items, listChecker);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
