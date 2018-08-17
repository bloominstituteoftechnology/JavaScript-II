const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstValue(monkey){
  console.log(monkey);
}

function firstItem(arr, cb){
  cb(arr[0]); 
}
firstItem(items, firstValue);

//  // firstItem passes the first item of the given array to the callback function.
function long(monkey){
  console.log(monkey);
}
function getLength(arr, cb) {
  cb(arr.length);
}
getLength(items, long);
  // getLength passes the length of the array into the callback.
function lastItem(monkey){
  console.log(monkey);
}

function last(arr, cb) {
  cb(arr[arr.length-1]);
}
last(items, lastItem);
  // last passes the last item of the array into the callback.
function displayAddition(monkey){
  console.log(monkey);
}

function sumNums(x, y, cb) {
  cb(x + y);
}
sumNums(3, 4, displayAddition);

  // sumNums adds two numbers (x, y) and passes the result to the callback.
function displayMultiply(monkey){
  console.log(monkey);
}
function multiplyNums(x, y, cb) {
  cb( x * y);
}
multiplyNums(4, 3, displayMultiply)
 // multiplyNums multiplies two numbers and passes the result to the callback.
function pass(monkey){
  console.log(monkey);
}
function contains(item, list, cb) {
  const boolean = list.includes(item);
  cb(boolean);

}
contains("Nonsense", items, pass)

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
