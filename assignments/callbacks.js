const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
	// firstItem passes the first item of the given array to the callback function.
	console.log(cb(arr));
}
let first = function(items) {
	return items[0];
};

firstItem(items, first);

function getLength(arr, cb) {
	// getLength passes the length of the array into the callback.
	console.log(cb(arr));
}

let length = function(items) {
	return items.length;
};

getLength(items, length);

function last(arr, cb) {
	// last passes the last item of the array into the callback.
	console.log(cb(arr));
}
let lastItem = function(items) {
	return items[items.length - 1];
};
last(items, lastItem);

function sumNums(x, y, cb) {
	// sumNums adds two numbers (x, y) and passes the result to the callback.
	console.log(cb(x, y));
}
let sum = function(x, y) {
	return x + y;
};

sumNums(3, 4, sum);

function multiplyNums(x, y, cb) {
	// multiplyNums multiplies two numbers and passes the result to the callback.
	console.log(cb(x, y));
}
let multiply = function(x, y) {
	return x * y;
};
multiplyNums(7, 4, multiply);

function contains(item, list, cb) {
	// contains checks if an item is present inside of the given array/list.
	// Pass true to the callback if it is, otherwise pass false.
	console.log(cb(item, list));
}
let isThere = function(item, list) {
	return list.includes(item);
};

contains('Pencil', items, isThere);
contains('Shoe', items, isThere);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
	// removeDuplicates removes all duplicate values from the given array.
	// Pass the duplicate free array to the callback function.
	// Do not mutate the original array.
}
