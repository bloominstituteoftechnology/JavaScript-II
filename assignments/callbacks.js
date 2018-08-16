const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function first(items) {  //callback function
  console.log(items[0]);
}

firstItem(items, first);


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function length(items) {  //callback function
  console.log(items.length);
}

getLength(items, length);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

function lastItem(items) { //callback function
  console.log(items[items.length-1]);
}

last(items, lastItem);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function sumTwoNums(x, y) { //callback function
  console.log(x + y);
}

sumNums(45,23, sumTwoNums);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}

function multiplyTwoNums(x,y) { //callback function
  console.log(x*y);
}

multiplyNums(8,24, multiplyTwoNums);

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
