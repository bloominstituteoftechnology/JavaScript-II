const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// Problem 1
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function first(items) {
	console.log(items[0]);
}

firstItem(items, first);

// Problem 2
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function length(items) {
	console.log(items.length);
}

getLength(items, length);

// Problem 3
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

function final(items){
	console.log(items[items.length-1]);
}

last(items, final);

// Problem 4
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
	return cb(x, y);
}

function sumUp(num1, num2) {
	console.log(num1 + num2);
};

sumNums(1, 2, sumUp);

// Problem 5
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
	return cb(x, y);
}

function product(num1, num2) {
	console.log(num1 * num2);
}

multiplyNums(2, 3, product);
/* STRETCH PROBLEM */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
