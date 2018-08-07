const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
    return cb(arr);
}

function first(items) {
  console.log(items[0]);
}

firstItem(items, first);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function len(items) {
  console.log(items.length);
}

getLength(items, len);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

function lastItem(arr, cb) {
  console.log(items.length - 1);
}

lastItem(items, last);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return (x + y);
}

function sum(x, y) {
  return (x + y);
}

sumNums(x, y, sum);

function multiplyNums(x, y, cb) {
  return (x * y);
}

function quotient(x, y) {
  return (x * y);
}

multiplyNums(x, y, quotient);

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
