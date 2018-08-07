const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
//calculate(items, first)

function first (items) {
  return items[0];
}

firstItem(items, function(first) {
  console.log(first);
});






function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function theLength (items) {
  return items.length;
}

getLength(items, function(theLength) {
  console.log(theLength);
});




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[items.length - 1]);
}

function getLast(items) {
  return items[items.length - 1];
}

last(items, function(getLast){
  console.log(getLast);
});






function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function adding(x, y) {
  console.log(x + y);
  return x + y;
}

sumNums(2, 4, adding);















function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function multiplying(x, y) {
  console.log(x * y);
  return x * y;
}

multiplyNums(2, 4, multiplying);







//this is also a stretch!
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
