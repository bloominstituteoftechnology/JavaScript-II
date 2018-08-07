const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
   return cb(arr[0]);
}
firstItem(items, function(first) {
  console.log(first);
});
//------------------------------------------//
function getLength(arr, cb) {
  return cb(arr[0]);
}
getLength(items, function() {
  console.log(items.length);
});
//------------------------------------------//
function last(arr, cb) {
  return cb(arr[3]);
}
last (items, function(final) {
  console.log(final);
});
//------------------------------------------//
function sumNums(x, y, cb) {
  return cb(x,y);
}

function add (x,y){
  console.log (x + y)
}
sumNums(2,4, add);

function multiplyNums(x, y, cb) {
  return cb(x,y);
}

function multiply (x,y){
  console.log (x * y);
}
sumNums(2,4, multiply);

//------------------------------------------//
/* STRETCH PROBLEM */

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  
}


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
