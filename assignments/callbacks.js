const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

//#1
function first(items) {
  return (items[0]);
}
function firstItem(arr, cb) {
  return (cb(arr)); // firstItem passes the first item of the given array to the callback function.
}
console.log(firstItem(items, first));

//#2
function getLength(arr, cb) {
  return (cb(arr.length)); // getLength passes the length of the array into the callback.
}
getLength(items, function(length){
  console.log(length)
});

 //#3
function getLast(arr, cb) {
  return (cb(arr[arr.length-1]));// last passes the last item of the array into the callback.
}
getLast(items, function(last){
  console.log(last)
});

//#4
function sumNums(x, y, cb) {
  return (cb(x+y));// sumNums adds two numbers (x, y) and passes the result to the callback.
}

sumNums(3,4, function(add) {
  console.log(add)
});

//#5
function multiplyNums(x, y, cb) {
  return (cb(x*y));// multiplyNums multiplies two numbers and passes the result to the callback.
}
multiplyNums(3, 4, function(multiply) {
  console.log(multiply)
});



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
