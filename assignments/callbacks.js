const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}
function first(items) {
  return items[0];
}
console.log(firstItem(items, first));



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
function length(items) {
  return items.length;
}
console.log(getLength(items, length));



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
function lastItem(items) {
  return items[items.length - 1];
}
console.log(last(items, lastItem));



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
function add(x, y) {
  return x + y;
}
console.log(sumNums(9, 4, add));



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
function multiply(x, y) {
  return x * y;
}
console.log(sumNums(9, 4, multiply));


/* STRETCH PROBLEM */
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}
function contain(item, list) {
  if (list.includes(item));
}
console.log(contains(Notebook, items, contain));



function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
