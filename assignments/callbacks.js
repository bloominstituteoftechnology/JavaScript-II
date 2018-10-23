const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
// 1
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}
function firstItemInArray(arr){
  console.log(arr[0]);
}
firstItem(items, firstItemInArray);

// 2
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
function lengthOfArray(arr){
  console.log(arr.length);
}
getLength(items, lengthOfArray);

// 3
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
function lastItemInArray(arr){
  console.log(arr.slice(-1)[0]);
}
last(items, lastItemInArray);

// 4
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}
function add(x,y){
  console.log(x + y);
}
sumNums(2, 3, add);

//5
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
function multiply(x, y){
  console.log(x * y);
}
multiplyNums(2, 3, multiply);

//6
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) return cb(true);
  else return cb(false);
}
contains("Pencil", items, function(includesItem){
  console.log(includesItem);
});
contains("Notebook", items, function(includesItem){
  console.log(includesItem);
});

contains("Dog", items, function(includesItem){
  console.log(includesItem);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
