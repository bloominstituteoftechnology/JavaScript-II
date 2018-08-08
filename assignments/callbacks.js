const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  return cb(arr);
}

function first(item) {
  return item[0];
}










function getLength(arr, cb) {
  return cb(arr);
}

function length(item) {
  return item.length;
}






function last(arr, cb) {
  return cb(arr);
}

function lastItem(item) {
  return item.length
}







function sumNums(x, y, cb) {
  return cb(x + y);
}

function add(num1, num2) {
  return num1 + num2;
} 

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

function multiply(num1, num2) {
  return x * y;
}



function contains(item, list, cb) {
  return cb(item, list);
}

function hasIndex(item, list) {
  return list.indexOf(item) >= 0;
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
