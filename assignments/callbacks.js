const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
	return cb(arr);
}

function first(item) { // create callback that contains the first item from the array (items)
	return item[0];
}

console.log(firstItem(items, first)); // log function that contains the first item of the array (items) thats passed to the callback (first).

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}
	return cb(arr);
}

function length(item) {
	return item.length;
}

console.log(getLength(items, length));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

return cb(arr);

function lastItem (item) {
	return item.length - 1;
}

console.log (last(items,lastItem));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
	return cb(x, y);
}

function add (x,y){
	return x + y;
}

console.log (sumNums(4, 6, add));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
	return cb(x, y);
}

function multiply (x, y) {
	return x * y;
}

console.log (multiplyNums(5, 4, multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
	
	return cb(item, list);
}

function contain (item, list) {
	return list.includes(item);
	
}

console.log (contains('Gum',items, contain));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
